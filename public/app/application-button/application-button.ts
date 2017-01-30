export class ApplicationButton
{
    private icon  : string;
    private label : string;
    public onAction : Function;
    public parent : any;

    constructor( parent: any, icon: string, label: string, onAction : Function )
    {
        this.icon = icon;
        this.label = label;
        this.onAction = onAction;
        this.parent = parent;
    }

    getIcon()
    {
        if ( this.icon.match( 'fa ' ) )
        {
            return this.icon;
        }

        else
        {
            return "fa " + this.icon;
        }
    }

    getLabel()
    {
        return this.label;
    }

    getParent()
    {
        return this.parent;
    }
}
