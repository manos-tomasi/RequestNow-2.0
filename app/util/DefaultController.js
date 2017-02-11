
module.exports = function ( _model , _eager )
{
    var DefaultController = {};

    DefaultController.getItems = function ( req, res )
    {
        _model.query().eager( _eager )
        .where( _model.tableName + '.state', 0 )
        .then( function( _items )
        {
          res.json( _items );
        } );
    };

    DefaultController.getItem = function ( req, res )
    {
        if ( req.params.id )
        {
            _model.query().eager( _eager )
            .where( _model.tableName + '.state', 0 )
            .where( 'id', req.params.id )
            .then( function( _items )
            {
                res.json( _items );
            } );
        }
    };

    DefaultController.beforeAddItem = function( req, callback )
    {
        callback();
    };

    DefaultController.addItem = function ( req, res )
    {
        console.log( req.body );

        DefaultController.beforeAddItem( req, function()
        {
            console.log( req.body );

            if ( req.body )
            {
                _model.query()
                .insertAndFetch( req.body )
                .then( function( _item )
                {
                    res.json( _item );
                } );
            }
        } );
    };

    DefaultController.updateItem = function ( req, res )
    {

        console.log( req.body );

        if ( req.body )
        {
            _model.query()
            .updateAndFetchById( req.body.id, req.body )
            .then( function( _item )
            {
                res.json( _item );
            } );
        }
    };

    DefaultController.deleteItem = function ( req, res )
    {
        if ( req.params.id )
        {
            _model.query()
            .deleteById( req.params.id )
            .then( function( rows )
            {
                res.json( rows );
            } );
        }
    };

    return DefaultController;
}
