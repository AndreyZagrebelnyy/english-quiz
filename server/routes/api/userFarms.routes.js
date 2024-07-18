const myFarmRouter = require('express').Router()
const { Farm } = require('../../db/models')
const verifyAccessToken = require('../../middleware/verifyAccessToken')

myFarmRouter.get('/', verifyAccessToken, async (req, res) => {
	const { id } = res.locals.user;
	try {
		const farms = await Farm.findAll({where: {userId:id}}
			// {order:[createdAt, DESC]}
		)
		res.status(200).json({ message: 'success', farms })
	} catch (error) {
		res.status(500).json(error)
	}
})

myFarmRouter.get('/:id', verifyAccessToken,  async (req, res) => {
	const { id } = req.params
	console.log('im here');
	try {
		const farm = await Farm.findAll({where:{userId:id}})
		res.status(200).json({ message: 'success', farm })
	} catch (error) {
		res.status(500).json(err)
	}
})

myFarmRouter.post('/', verifyAccessToken, async (req, res) => {
	const { id } = res.locals.user;
	try {
		const farm = await Farm.create({ ...req.body, userId: id });
		res.status(201).json({ message: 'success', farm })
	} catch (error) {
		res.status(500).json(error.message);
	}
})

myFarmRouter.put('/:id', verifyAccessToken, async (req, res) => {
	const { id } = req.params
	const { id: userId } = res.locals.user;
	try {
		const farm = await Farm.update(req.body, { where: { id, userId } })
		if (farm[0] > 0) {
			res.status(200).json({ message: 'success', farm })
		} else {
			res.status(400).json({ message: 'fail' })
		}
	} catch (error) {
		res.status(500).json(error);
	}
})

myFarmRouter.delete('/:id', verifyAccessToken, async (req, res) => {
	const { id } = req.params
	const { id: userId } = res.locals.user;
	try {
		const farm = await Farm.destroy({ where: { id, userId } })
		if (farm > 0) {
			res.status(200).json({ message: 'success', farm })
		} else {
			res.status(400).json({ message: 'fail' });
		}
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = myFarmRouter