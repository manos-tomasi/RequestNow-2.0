module.exports = function ( app )
{
    app.get( '/api/service', ( req, res ) =>
    {
        res.send( "<div>OI</div>" );
    } );
}
