const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema(
    {
        title: {type:String},
        author: {type:String},
        genre: {type:String},
        schedule: {type: [[String]], default: [
            ["", "Schedule One", "Schedule Two"],
            ["8 AM", "free", "free"],
            ["9 AM", "free", "free"],
            ["10 AM", "free", "free"],
            ["11 AM", "free", "free"],
            ["12 PM", "free", "free"],
            ["1 PM", "free", "free"],
            ["2 PM", "free", "free"],
            ["3 PM", "free", "free"],
            ["4 PM", "free", "free"],
            ["5 PM", "free", "free"],
            ["6 PM", "free", "free"],
            ["7 PM", "free", "free"],
            ["8 PM", "free", "free"]
          ]},
        read: {type:Boolean, default: false}
    }
);

module.exports = mongoose.model('Book', bookModel);