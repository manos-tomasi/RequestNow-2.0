'use strict';

module.exports = function ( app )
{
    app.get( '/api/users', app.controllers.UserController.getUsers );

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
