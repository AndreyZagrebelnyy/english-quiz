'use strict';
const {
  Model
} = require('sequelize');
// const category = require('./role');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    static associate(models) {
		this.belongsTo(models.Farm, { foreignKey: 'farmId' });
    }
  }
  Animal.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    farmId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};