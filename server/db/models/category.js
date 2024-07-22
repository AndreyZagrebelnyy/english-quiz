'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Category extends Model {
		static associate(models) {
			this.hasMany(models.Task, { foreignKey: 'categoryId' });
	}
	}

	Category.init({
		title: DataTypes.STRING,
		image: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Category',
	});
	return Category;
};