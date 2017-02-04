var Model = require('objection').Model;

var User = require( './User.js');

module.exports = function( app )
{
    function Sector() {
      Model.apply(this, arguments);
    }

    Model.extend(Sector);

    Sector.tableName = 'sectors';

    /*Sector.relationMappings =
    {
        users:
        {
            relation: Model.HasManyRelation,
            modelClass: "users",
            join:
            {
              from: 'sectors.id',
              to: 'users.ref_sector'
            }
        }
    };*/

    return Sector;
};
