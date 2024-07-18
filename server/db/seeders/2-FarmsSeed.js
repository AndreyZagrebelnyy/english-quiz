'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert(
      'Farms',
	[
		{
		  title: "Sunny Farm",
		  userId: 1,
		  createdAt: new Date(),
		  updatedAt: new Date(),
		},
		{
			title: "Windy Farm",
			userId: 2,
			createdAt: new Date(),
			updatedAt: new Date(),
		 },
		 {
			title: "Rocky Farm",
			userId: 3,
			createdAt: new Date(),
			updatedAt: new Date(),
		 },
		 {
			title: "West Farm",
			userId: 4,
			createdAt: new Date(),
			updatedAt: new Date(),
		 },
		 {
			title: "Moses Farm",
			userId: 1,
			createdAt: new Date(),
			updatedAt: new Date(),
		 }
	 ], {})
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Farms', null, {});
  }
};
