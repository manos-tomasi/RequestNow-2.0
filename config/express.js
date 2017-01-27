var express        = require( 'express' ),
    path           = require( 'path' ),
    bodyParser     = require( 'body-parser' ),
    methodOverride = require( 'method-override' ),
    helmet 		     = require( 'helmet' ),
    session        = require( 'express-session' ),
    cookieParser   = require( 'cookie-parser' ),
    passport       = require( 'passport' );

module.exports = function()
{
  	var app = express();

  	app.set( 'port', 3000 );

    app.set( 'view engine', 'ejs' );

    app.use( '/api', require( '../app/routes/api' ) )
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

    app.get( '*', (req, res) => {
      res.sendFile( path.join(__dirname, '../dist/index.html') );
    } );


    return app;
}
