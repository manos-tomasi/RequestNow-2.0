const DefaultController = require('../util/DefaultController.js');
const Encryption = require('../util/Encryption.js');

module.exports = function ( app )
{
    var ctrl = new DefaultController( app.models.User, "sector" );

    ctrl.beforeAddItem = function( req, callback )
    {
        var item = req.body;

        if ( item.password )
        {
            item.password = Encryption.getHash( item.password );

            req.body = item;
        }

        callback();
    }

    return ctrl;
}
