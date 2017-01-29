export class Request
{
    private name : string;

    constructor( name: string = "Não definido" )
    {
        this.name = name;
    }

    setName( name : string )
    {
        this.name = name;
    }

    getName() : string
    {
        return this.name;
    }

    toString() : string
    {
        return this.name;
    }
}
