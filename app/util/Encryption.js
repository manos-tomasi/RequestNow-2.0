var crypto = require('crypto');

var Encryption = {};

Encryption.getHash = function( password )
{
    var hash = crypto.createHash( 'sha1' );

    hash.update( password );

    return "<" + hash.digest( "hex" ) + ">";
}

module.exports = Encryption;
