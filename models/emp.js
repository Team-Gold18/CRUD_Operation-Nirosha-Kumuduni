const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var empSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter name of the employee'
    },
    city: {
        type: String,
        required: 'Please enter city of the employee'
    },
    age: {
        type: String,
        required: 'Please enter age of the employee'
    },
});

module.exports = mongoose.model('Emp', empSchema)