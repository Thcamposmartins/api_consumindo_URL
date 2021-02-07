const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    title:{
        type: Number,
        require: true,
    },
    body:{
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('textoJson', Schema);