'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
	static associate(models) {
		this.belongsTo(models.Category, { foreignKey: 'categoryId' });
}   
  }
  Task.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    image: DataTypes.TEXT,
    points: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};