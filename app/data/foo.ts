/**
 * [Foo description]
 * @type {[type]}
 */
export class Foo
{
	id:number;
	link:string;
	info:string;
	name:string;

	/**
	 * [constructor description]
	 * @param {number} id   [description]
	 * @param {string} name [description]
	 * @param {string} link [description]
	 * @param {string} info [description]
	 */
	constructor( id:number, name:string, link:string, info:string )
	{
		this.id = id;
		this.name = name;
		this.link = link;
		this.info = info;
	}
}