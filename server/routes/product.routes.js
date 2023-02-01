const { createProduct, showAllTheProducts, deleteProduct, updateProduct, sayHi, createPerson } = require("../controllers/product.controller");


module.exports = (app) => {
    app.get("/sayhi", sayHi);
    app.get("/api/products", showAllTheProducts);
    app.post("/api/products/new", createProduct);
    app.delete("/api/products/delete/:_id", deleteProduct); 
    app.put("/api/products/update/:_id", updateProduct);
    app.post('/api/people', createPerson);
}