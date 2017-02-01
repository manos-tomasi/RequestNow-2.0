function checkAuthenticated( req, res, next )
{
    if ( req.isAuthenticated() )
    {
        return next();
    }

    else
    {
        res.status( '401' ).json( 'Sem autorização' );
    }

};

var Database  = require( '../database.js' );

module.exports = function ( app )
{
    app.get( '/api/users', ( req, res ) =>
    {

      console.log( "get");
        var db = Database.getInstance();

        db.query( "select * from users order by id desc;", function( rows )
        {
            res.json( rows );
        } );

    } );

    app.get( '/api/users/:id', ( req, res ) =>
    {console.log( "post");
    console.log( req.body );
    console.log( req.data );

    res.json( req.body );

    } );

    app.post( '/api/users', ( req, res ) =>
    {
        console.log( "post");
        console.log( req.body );
        console.log( req.data );

        res.json( req.body );
    } );

    app.put( '/api/users', ( req, res ) =>
    {
        console.log( "put");
        console.log( req.body );
        console.log( req.data );

        res.json( req.body );
    } );

    app.delete( '/api/users', ( req, res ) =>
    {
      console.log( "delete");

        console.log( req.body );
        console.log( req.data );
    } );
}
