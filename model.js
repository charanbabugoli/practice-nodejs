const mongoose = require('mongoose');

const  BrandName = mongoose.Schema({
    brandname : {
        type : String,
        required:true,
    },
    Data : {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('brandname',BrandName)