/**
 * Major_class.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    major_class_id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    major: {
      type: 'integer',
      model: 'major',
      columnName: 'major_id'
    },
    class: {
      type: 'integer',
      model: 'class',
      columnName: 'class_id'
    }
  },
    autoPK: false
};
