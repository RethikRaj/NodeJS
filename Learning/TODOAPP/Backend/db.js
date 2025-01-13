const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Defining Schemas
const User = new Schema({
    username : String,
    email : {type : String, unique : true},
    password : String
})

const Todo = new Schema({
    title : String,
    done : Boolean,
    userId : ObjectId
})

// Creating Models on top of Schemas
const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports = {
    UserModel : UserModel,
    TodoModel : TodoModel
}