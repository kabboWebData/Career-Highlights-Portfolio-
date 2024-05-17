const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CV");

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },

    message:{
        type: String,
        required: true,
    },

});

const contactModel = mongoose.model("contactInfo", contactSchema);

module.exports = contactModel;