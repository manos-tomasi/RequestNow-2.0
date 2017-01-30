var Database  = require( '../database.js' );

module.exports = function ( app )
{
    app.get( '/api/users', ( req, res ) =>
    {
        var db = Database.getInstance();

        db.query( "select * from users;", function( rows )
        {
            res.json( rows );
        } );

    } );


}
