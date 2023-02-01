const Person = require("../models/person.model");
const Product = require("../models/product.model");

module.exports.createProduct = async (req, res) => {
    try{console.log(req.body);
      const { body } = req;
      const newProduct = await Product.create(body);
      console.log(newProduct);
      res.json({
          message: 'Se ha creado de manera exitosa el nuevo producto',
          newProduct
      });
    }catch(err){
      console.log(err);
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido crear el producto'
      })
    }
  }

  module.exports.showAllTheProducts= async (req, res) => {
    try{
      const fullListOfProducts = await Product.find()
      console.log(fullListOfProducts);
      res.json({
        message: 'Se han traido de manera exitosa todos los productos',
        list: fullListOfProducts
      })
    }catch(err){
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido traer todas los productos'
      })
    }
  }

  module.exports.deleteProduct= async (req, res) => {
    try{
        const { params } = req;
        console.log(params._id);
    const deleteProducts = await Product.deleteOne({_id: params._id })
    const fullListOfproducts = await Product.find()
    res.json({
        message: "Se ha borrado el producto de manera exitosa",
        deleteProducts,
        list: fullListOfproducts
    })
    }catch(err){
        res.status(500).json({
            error: err,
            message: 'Ups, no hemos podido borrar el producto'
    })
    }
    
  }

  module.exports.updateProduct = async (req, res) => {
    try{
      const { body, params } = req;
        const updateProducts = await Product.findOneAndUpdate(
          {_id: params._id},
          body,
          {new: true}
        )
        res.json({
        message: "Se ha modificado el producto exitosamente",
        updateProducts,
    })
    }catch(err){
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido actualizar el producto'
      })
    }
  }
  
  module.exports.sayHi = async (req, res) =>{
    try{
        res.json({
            message: "Hello World"
        })
    }catch(err){
        res.status(500).json({
        error: err,
        message: 'Ups, no ha funcionado el saludo'
      })
    }
  }

  module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}