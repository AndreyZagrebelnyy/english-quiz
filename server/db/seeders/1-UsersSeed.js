'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert(
      'Users',
      [
			{
			  name: "firstName1",
			  email: "1@mail.com",
			  password: "password1",
			  score: 0,
			  createdAt: new Date(),
			  updatedAt: new Date(),
			},
			{
			  name: "firstName2",
			  email: "2@mail.com",
			  password: "password2",
			  score: 0,
			  createdAt: new Date(),
			  updatedAt: new Date(),
			},
			{
			  name: "firstName3",
			  email: "3@mail.com",
			  password: "password3",
			  score: 0,
			  createdAt: new Date(),
			  updatedAt: new Date(),
			},
			{
			  name: "firstName4",
			  email: "4@mail.com",
			  password: "password4",
			  score: 0,
			  createdAt: new Date(),
			  updatedAt: new Date(),
			},
		 ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Users', null, {});
  }
};
