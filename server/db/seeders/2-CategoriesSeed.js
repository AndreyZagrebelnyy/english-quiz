'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert(
      'Categories',
	[
		{
		  title: "What's on picture?",
		  image: 'logo1.jpg',
		  createdAt: new Date(),
		  updatedAt: new Date(),
		},
		{
		  title: "Guess a famous person",
		  image: 'logo2.jpg',
		  createdAt: new Date(),
		  updatedAt: new Date(),
		}
	 ], {})
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Categories', null, {});
  }
};
