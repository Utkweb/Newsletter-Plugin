// signup form    
const {Schema, model} = require('../connection');

const myschema = new Schema({
    username:String,
    email:String,
    contact:String,
    password:String,
    createdAt:Date,
});

module.exports = model('users',myschema);