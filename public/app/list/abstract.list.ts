export abstract class AbstractList<T>
{
    private MAX_ITENS : number = 10;
    private index : number = 0;

    private items : Array<T>;
    private selected : T;

    constructor(){}

    public getItems() : Array<T>
    {
        return this.items;
    }

    public getItemsAt( index : number ) : Array<T>
    {
        return this.items;
    }

    public setItems( items : Array<T> )
    {      
        this.items = items;
    }

    public addItem( item : T )
    {
        if ( ! this.items )
        {
            this.items = new Array<T>();
        }

        this.items.push( item );
    }

    public removeItem( item : T )
    {
        if ( item )
        {
            this.items = this.items.filter( i => i !== item );
        }
    }

    public getSelectedItem() : T
    {
        return this.selected;
    }

    public setSelectedItem( selected : T )
    {
        this.selected = selected;
    }

    public abstract onRenderer( item : T );
}
