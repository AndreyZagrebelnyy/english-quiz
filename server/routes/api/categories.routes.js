const categoryRouter = require('express').Router()
const { Category } = require('../../db/models')
const verifyAccessToken = require('../../middleware/verifyAccessToken')

categoryRouter.get('/', async (req, res) => {
	try {
		const categories = await Category.findAll()
		res.status(200).json({ message: 'success', categories })
	} catch (error) {
		res.status(500).json(error)
	}
})

categoryRouter.get('/:id', async (req, res) => {
	const { id } = req.params
	console.log(req.params);
	try {
		console.log(222222222222);
		const category = await Category.findAll()
		res.status(200).json({ message: 'success', category })
	} catch (error) {
		res.status(500).json(error)
	}
})

categoryRouter.post('/', verifyAccessToken, async (req, res) => {
	const { id } = res.locals.user;
	try {
		const category = await Category.create({ ...req.body, userId: id });
		res.status(201).json({ message: 'success', category })
	} catch (error) {
		res.status(500).json(error.message);
	}
})

categoryRouter.put('/:id', verifyAccessToken, async (req, res) => {
	const { id } = req.params
	const { id: userId } = res.locals.user;
	try {
		const category = await Category.update(req.body, { where: { id, userId } })
		if (category[0] > 0) {
			res.status(200).json({ message: 'success', category })
		} else {
			res.status(400).json({ message: 'fail' })
		}
	} catch (error) {
		res.status(500).json(error);
	}
})

categoryRouter.delete('/:id', verifyAccessToken, async (req, res) => {
	const { id } = req.params
	const { id: userId } = res.locals.user;
	try {
		const category = await Category.destroy({ where: { id, userId } })
		if (category > 0) {
			res.status(200).json({ message: 'success', category })
		} else {
			res.status(400).json({ message: 'fail' });
		}
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = categoryRouter