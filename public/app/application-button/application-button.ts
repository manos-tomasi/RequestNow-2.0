export class ApplicationButton
{
    private icon  : string;
    private label : string;
    public onAction : Function;

    constructor( icon: string, label: string, onAction : Function )
    {
        this.icon = icon;
        this.label = label;
        this.onAction = onAction;
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
}
