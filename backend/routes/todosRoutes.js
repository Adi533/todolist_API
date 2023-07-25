const express = require('express');
const { createDB, createTable, createList, showTodos, singleTodo, updateTodo, deleteSingleTodo } = require('../controllers/todosController');
const router = express.Router();


router.get('/create/database', createDB);
router.get('/create/table', createTable);
router.post('/tasks', createList);
router.get('/tasks', showTodos);
router.patch('/tasks/:id', updateTodo);
router.delete('/tasks/:id', deleteSingleTodo);



module.exports = router;