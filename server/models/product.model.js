const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    title:{
        type: String,
        required: [true, 'Debe ingresar un titulo'],
        minlength: [1, 'No puede tener menos de 1 caracter']
    },
    price:{
        type: Number,
        required: [true, 'Debe ingresar un precio'],
        minimun: 0,
        maximum: 10000,
        description: 'No puede tener un precio menor a 0'
    },
    description:{
        type: String,
        required: [true, 'Debe ingresar una descripción'],
        minlength: [1, 'No puede tener menos de 1 caracter'],
        maxlength: [300, 'No puede tener más de 300 caracteres']
    }
}, {timestamps: true});

const Product = model('Product', productSchema)
module.exports = Product;