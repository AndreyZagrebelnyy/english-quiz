'use strict';

const TasksArr = [
	{
		question: `What's on picture?`,
		answer: `Nintendo Stitch`,
		image: `nintendo stitch.png`,
		points: 10,
		categoryId: 1,
	},
	{
		question: `Who's on the picture`,
		answer: `Capibarber`,
		image: `capibarber.jpg`,
		points: 15,
		categoryId: 1,
	},
	{
		question: `What's on picture?`,
		answer: `Bootcamp`,
		image: `bootcamp.jpg`,
		points: 10,
		categoryId: 1,
	},
	{
		question: `What's on picture?`,
		answer: `Spaghetto`,
		image: `spaghetto.jpg`,
		points: 25,
		categoryId: 1,
	},
	{
		question: `Who's on the picture?`,
		answer: `Peperon`,
		image: `peperon.jpg`,
		points: 10,
		categoryId: 1,
	},
	{
		question: `Who's on the picture?`,
		answer: `Sharkira`,
		image: `sharkira.png`,
		points: 20,
		categoryId: 1,
	},
	{
		question: `Name this famous person?`,
		answer: `Ice-T`,
		image: `iceT.jpg`,
		points: 10,
		categoryId: 2,
	},
	{
		question: `Name this famous person?`,
		answer: `Neil Armstrong`,
		image: `neilArmstrong.jpg`,
		points: 15,
		categoryId: 2,
	},
	{
		question: `Name this famous person?`,
		answer: `Taylor Swift`,
		image: `taylorSwift.jpg`,
		points: 20,
		categoryId: 2,
	},
	{
		question: `Name this famous person?`,
		answer: `Britney Spears`,
		image: `britneySpears.jpg`,
		points: 25,
		categoryId: 2,
	}
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Tasks',
			TasksArr, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Tasks', null, {});
	}
};
