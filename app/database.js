var _config = require( '../config/config.json' );
var mongoose = require( 'mongoose' );

var connection;

module.exports = function()
{
    connection =  mongoose.connect(  _config.database.uri, { server: {poolSize: 15} } );

    mongoose.connection.on( 'connected', function()
    {
        console.log( 'MongoDB Connectado !!' );
    });

    mongoose.connection.on( 'disconnected', function()
    {
        console.log( 'MongoDB Desconnectado !!' );
    });

    process.on( 'SIGINT', function()
    {
          mongoose.connection.close( function ()
          {
              console.log( 'MongoDB Desconnectado !!' );
              process.exit( 0 );
          } );
    } );
};
