'use strict';

const AnimalsArr = [];

for (let i =0; i < 10; i++){
	let item = {
		name: `Animal name ${i}`,
		image: 'https://www.vedantu.com/seo/content-images/5f725f83-06f7-4018-b901-15b01cd738c5.png',
		farmId: Math.floor(Math.random() * 5) + 1
	}
	AnimalsArr.push(item)
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Animals',
			AnimalsArr, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Animals', null, {});
	}
};
