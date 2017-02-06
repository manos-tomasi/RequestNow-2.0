/* global require, module, app */

const passport         = require( 'passport' );
const LocalStrategy    = require('passport-local').Strategy;
const FacebookStrategy = require( 'passport-facebook' ).Strategy;
const Encryption       = require( '../app/util/Encryption.js' );

module.exports = function( app )
{
    passport.use( new FacebookStrategy
    ( {
        clientID: "334825226879943",
        clientSecret: "985475af65682a64c6af823d3e421f86",
        callbackURL: "http://localhost:8080/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
      },
      function( accessToken, refreshToken, profile, done )
      {
      }
    ) );

    /**
     *
     */
    passport.use( new LocalStrategy
    (
        /**
         *
         * @param {type} login
         * @param {type} password
         * @param {type} done
         * @returns {undefined}
         */
        function( login, password, done )
        {
            app.models.User.query()
            .where( 'login', login )
            .andWhere( 'password', Encryption.getHash( password ) )
            .then( function( result )
            {
                var user = result[0] || undefined;

                if ( ! user )
                {
                    return done( null, false );
                }

                return done( null, user );
            } );
        }
    ) );

    /**
     *
     */
    passport.serializeUser( function( user, done )
    {
        done( null, user.id );
    } );

    /**
     *
     */
    passport.deserializeUser( function( id, done )
    {
        app.models.User.query()
        .where( 'id', id )
        .then( function( user )
        {
            done( null, user );
        } );
    } );
};
