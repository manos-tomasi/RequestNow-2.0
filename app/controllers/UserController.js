module.exports = function ( app )
{
    var User = app.models.User;

    var Controller = {};

    Controller.getUsers = function( req, res )
    {
        console.log( "here" );

        User.query().eager('sector').then( function( _users )
        {
            console.log( "users" );
            console.log( _users );

            res.json( _users );
        } );
    }

    return Controller;
}
