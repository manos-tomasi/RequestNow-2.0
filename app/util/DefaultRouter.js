module.exports = function( app, _url, _ctrl )
{
    app.get( _url, _ctrl.getItems );

    app.get( _url + ':id', _ctrl.getItem );

    app.post( _url, _ctrl.addItem );

    app.put( _url, _ctrl.updateItem );

    app.delete( _url, _ctrl.deleteItem );
}
