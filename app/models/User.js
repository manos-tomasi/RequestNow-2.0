var Model = require('objection').Model;
var Sector = require('./Sector.js' );

module.exports = function( app )
{

  function User()
  {
      Model.apply( this, arguments );
  }

  Model.extend( User );

  User.tableName = 'users';

  User.defaultEagerAlgorithm = Model.JoinEagerAlgorithm;

  User.prototype.fullName = function ()
  {
      return this.name + ' - ' + this.login;
  }

  User.jsonSchema =
  {
      type: 'object',
      required: ['login', 'mail'],
      properties:
      {
          id: {type: 'integer'},
          state: {type: 'integer' },
          role: {type: 'integer' },
          ref_sector: {type: 'integer' },
          name: {type: 'string'},
          login: {type: 'string'},
          mail: {type: 'string'},
          password: {type: 'string'}
      }
  };

  User.relationMappings =
  {
      sector :
      {
          relation: Model.BelongsToOneRelation,
          modelClass: app.models.Sector,
          join:
          {
            from: 'users.ref_sector',
            to: 'sectors.id'
          }
      }
  };

  return User;
}
