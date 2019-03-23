const router = require('express').Router();
const { getTodos, addTodo, updateTodo, deleteTodo } = require('./controller.js');

router.route('/todos')
  .get(getTodos)
  .post(addTodo)
  .put(updateTodo)
  .delete(deleteTodo)

module.exports = router;