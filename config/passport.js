/* global require, module, app */

var passport         = require( 'passport' ),
    LocalStrategy    = require('passport-local').Strategy;
    FacebookStrategy = require( 'passport-facebook' ).Strategy;

module.exports = function()
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
          var user = {};

          user.email   = profile._json.email;
          user.name    = profile._json.name;
          user.picture = profile._json.picture.data.url;
          user.role    = 'Operador';

          User.findOneAndUpdate( { email: user.email },
          {
              name: user.name,
              picture: user.picture
          },
          function (err, _user )
          {
              if ( _user ) return done( err, _user );

              User.create( user, function( error, _user )
              {
                  if ( error )
                  {
                      res.status( 500 ).json( composeError( error ) );
                  }

                  return done( err, _user );
              } );

          } );
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
            var _query = "select * from users where login = '" + login + "' and password = '" + password + "';";

            console.log( _query );

            Database.getInstance().query( _query, function( result )
            {
                  var res = result[0];

                  if ( ! res )
                  {
                      return done( 'Confirme o Login e/ou Senha', false );
                  }

                  return done( null, res );
            } );
        }
    ) );

    /**
     *
     */
    passport.serializeUser( function( user, done )
    {
        console.log( user );

        done( null, user.id );
    } );

    /**
     *
     */
    passport.deserializeUser( function( id, done )
    {
        var _query = "select * from users where id = " + id;

        Database.getInstance().query( _query, function( result )
        {
            done( null, user );
        } );
    } );
};
