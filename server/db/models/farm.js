'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Farm extends Model {
    static associate(models) {
		this.hasMany(models.Animal, { foreignKey: 'farmId' });
    }
  }
  
  Farm.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Farm',
  });
  return Farm;
};