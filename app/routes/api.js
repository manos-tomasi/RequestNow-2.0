var passport = require( 'passport' );

module.exports = function( app )
{
    app.get('/auth/facebook', passport.authenticate( 'facebook', { scope: [ 'email' ] } ) );

    app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' } ),
    function( req, res )
    {
        res.redirect( "/" );
    } );

    app.post( '/api/login', function( req, res )
    {
        console.log( "req.user" );
        console.log( req );
        console.log( req.body );
        console.log( req.data );

        res.json( req.body );
    } );

    app.post( '/api/logout', function( req, res )
    {
        req.logOut();

        res.status( 200 ).json( {} );
    } );

}
