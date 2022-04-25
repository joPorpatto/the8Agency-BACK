const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
        name: {
                type: String, 
                required: true
        },
        surname: {
                type: String, 
                required: true
        },
        email:{
                type: String, 
                require: true,
                unique:true
        },
        country: {
                type: String, 
                required: true
        },
        phone: {
                type: String, 
                required: true
        },
        job: {
                type: String, 
                required: true
        },
        
});

module.exports= model('Usuario', UsuarioSchema)