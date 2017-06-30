/**
 * Assignment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      assignment_id: {
        type: 'integer',
        primaryKey: true,
        autoIncrement: true
      },
      student: {
        type: 'integer',
        model: 'student',
        columnName: 'student_id'
      },
      grade: {
        type: 'integer',
        model: 'grade',
        columnName: 'grade_id'
      },
      assignment_nbr: {
        type: 'integer'
      },
      class: {
        type: 'integer',
        model: 'class',
        columnName: 'class_id'
      }
    },
    autoPK: false
};
