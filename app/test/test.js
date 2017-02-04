var User = require( '../models/User.js' )();

User.query().then( function( user )
{
    console.log( user );
} );
