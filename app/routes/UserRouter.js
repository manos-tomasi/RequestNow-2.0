const DefaultRouter = require( '../util/DefaultRouter.js' );

module.exports = function( app )
{
    new DefaultRouter( app, "/api/users/", app.controllers.UserController );
};
