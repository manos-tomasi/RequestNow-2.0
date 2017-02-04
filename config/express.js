var express        = require( 'express' ),
    load           = require( 'express-load' ),
    path           = require( 'path' ),
    bodyParser     = require( 'body-parser' ),
    methodOverride = require( 'method-override' ),
    helmet 		     = require( 'helmet' ),
    session        = require( 'express-session' ),
    cookieParser   = require( 'cookie-parser' ),
    knex           = require( 'knex' ),
    config         = require( './config.json' );
    objection      = require( 'objection' );
    passport       = require( 'passport' );

module.exports = function()
{

    var _knex = knex( config.knex );

    objection.Model.knex( _knex );

  	var app = express();

  	app.set( 'port', 3000 );

    app.set( 'view engine', 'ejs' );

    app.use( express.static( path.join( __dirname, '../dist' ) ) );

  	app.use( bodyParser.urlencoded( { extended: true, limit: '50mb' } ) );
  	app.use( bodyParser.json( { limit: '50mb' } ) );
  	app.use( methodOverride() );
  	app.use( cookieParser() );
  	app.use( session({secret: 'homemavestruz', resave: true, saveUninitialized: true } ) );
  	app.use( passport.initialize() );
  	app.use( helmet() );
  	app.use( passport.session() );
  	app.use( helmet.hidePoweredBy( { setTo: 'PHP 5.5.14' } ) );
  	app.use( helmet.xssFilter() );
  	app.disable( 'x-powered-by' );

    load( 'models' , { cwd : 'app' } )
      .then( 'controllers' )
      .then( 'routes' )
      .into( app );

    app.get( '*', (req, res) => {
      res.sendFile( path.join( __dirname, '../dist/index.html' ) );
    } );

    return app;
}
