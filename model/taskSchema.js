const uniqid = require('uniqid');

const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskId:{
        type: String,
        unique: true,
        required: true,
    },
    content: {
        type: String,
        required: [true, "Add some Content"],
        minLength: [1,"Content too short"],
    },
    createdAt: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: String,
        default: "",
    },
    iscompleted: {
        type: Boolean,
        default: false,
    }
});

const Task = mongoose.model('Tasks', taskSchema);
module.exports = Task;