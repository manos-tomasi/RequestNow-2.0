const DefaultController = require('../util/DefaultController.js');

module.exports = function ( app )
{
    return new DefaultController( app.models.Sector, "" );
}
