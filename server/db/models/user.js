'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
	}
	User.init({
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		score: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'User',
	});
	return User;
};