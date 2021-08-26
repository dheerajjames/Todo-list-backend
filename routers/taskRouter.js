const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();
const { getAllTasks, addTask, getTaskById, updateTask, deleteTask, addValidation } = require('../controllers/taskController');
dotenv.config({path: './config.env'});


router.route("/").get(getAllTasks).post(addValidation, addTask);
router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

module.exports = router;