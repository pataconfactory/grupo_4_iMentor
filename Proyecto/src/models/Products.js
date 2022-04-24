const { all } = require('express/lib/application');
const fs = require('fs');
const path = require('path');

const Products = {
    
    fileName: path.join(__dirname, '../data/products.json'),

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName), 'utf-8');
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct.id === id);
        return productFound;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    generateID: function() {
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop()
        if(lastProduct) {
            return lastProduct.id + 1;
        }
        return 1;
    },

    createProduct: function(productData) {
        let allProducts = this.findAll();
        let newProduct = {
            id: this.generateID(),
            ...productData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
        return newProduct;
    },

    editProduct: function(productData) {
        
    },

    deleteProduct: function(id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        console.log(finalProducts)
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
    }
}

module.exports = Products;