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

    app.post( '/api/login', passport.authenticate('local' ), function( req, res )
    {
        if ( req.user )
        {
            res.json( req.user );
        }
    } );

    app.post( '/api/logout', function( req, res )
    {
        req.logOut();

        res.status( 200 ).json( {} );
    } );

}
