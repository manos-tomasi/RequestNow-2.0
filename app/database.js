var _pg     = require( 'pg' );
var _config = require( '../config/config.json' );
var _pool;

function Database()
{
     this._pool = new _pg.Pool( _config.database );
}

Database.getInstance = function()
{
    if ( ! Database._instance )
    {
        Database._instance =  new Database();
    }

    return Database._instance;
}

Database.prototype.query = function( sql, callback )
{
    this._pool.connect( function( err, client, done )
    {
        if( err )
        {
            return console.error( 'error fetching client from pool', err );
        }

        client.query( sql, function( err, result )
        {
            //call `done()` to release the client back to the pool
            done();

            if( err )
            {
                return console.error( 'error running query', err );
            }

            callback( result.rows );
        } );
    } );

    this._pool.on( 'error', function ( err, client )
    {
        console.error( 'idle client error', err.message, err.stack );
    } );
}

Database.prototype.command = function( sql )
{
    this._pool.connect( function( err, client, done )
    {
        if( err )
        {
            return console.error( 'error fetching client from pool', err );
        }

        client.query( sql );
    } );

    this._pool.on( 'error', function ( err, client )
    {
        console.error( 'idle client error', err.message, err.stack );
    } );
}

module.exports = Database;
