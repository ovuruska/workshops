const {Schema} = require("mongoose")

/* 
    [
        number  dateCreated
    ]
*/
const numbersSchema = new Schema({
    number:{
        type: Number,
        required:true
    }
}) 

module.exports = numbersSchema