var Model = require('objection').Model;

module.exports = function( app )
{
    function Sector()
    {
        Model.apply(this, arguments);
    }

    Model.extend(Sector);

    Sector.tableName = 'sectors';

    return Sector;
};
