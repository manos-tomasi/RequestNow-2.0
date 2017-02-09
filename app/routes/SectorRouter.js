const DefaultRouter = require( '../util/DefaultRouter.js' );

module.exports = function( app )
{
    new DefaultRouter( app, "/api/sectors/", app.controllers.SectorController );
};
