const taskRouter = require('express').Router()
const { Task } = require('../../db/models')
const task = require('../../db/models/task')
const verifyAccessToken = require('../../middleware/verifyAccessToken')

taskRouter.get('/', async (req, res) => {
	try {
		const tasks = await Task.findAll()
		res.status(200).json({ message: 'success', tasks })
	} catch (error) {
		res.status(500).json(error)
	}
})

taskRouter.get('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const tasks = await Task.findAll({where: {categoryId: id}})
		res.status(200).json({ message: 'success', tasks })
	} catch (error) {
		res.status(500).json(error)
	}
})

taskRouter.post('/', verifyAccessToken, async (req, res) => {
	const { id } = res.locals.user;
	try {
		const task = await Task.create({ ...req.body, userId: id });
		res.status(201).json({ message: 'success', task })
	} catch (error) {
		res.status(500).json(error.message);
	}
})

taskRouter.put('/:id', verifyAccessToken, async (req, res) => {
	const { id } = req.params
	const { id: userId } = res.locals.user;
	try {
		const task = await Task.update(req.body, { where: { id, userId } })
		if (task[0] > 0) {
			res.status(200).json({ message: 'success', task })
		} else {
			res.status(400).json({ message: 'fail' })
		}
	} catch (error) {
		res.status(500).json(error);
	}
})

taskRouter.delete('/:id', verifyAccessToken, async (req, res) => {
	const { id } = req.params
	const { id: userId } = res.locals.user;
	try {
		const task = await Task.destroy({ where: { id, userId } })
		if (task > 0) {
			res.status(200).json({ message: 'success', task })
		} else {
			res.status(400).json({ message: 'fail' });
		}
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = taskRouter