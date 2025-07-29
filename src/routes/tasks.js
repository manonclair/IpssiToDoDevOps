const express = require('express');
const Task = require('../models/task');
const router = express.Router();

// GET all
router.get('/', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// POST new
router.post('/', async (req, res) => {
  const { title, description, status } = req.body;
  const task = await Task.create({ title, description, status });
  res.status(201).json(task);
});

// GET one
router.get('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// PUT update
router.put('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  await task.update(req.body);
  res.json(task);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });

  await task.destroy();
  res.status(204).end();
});

module.exports = router;
