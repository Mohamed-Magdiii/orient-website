
const Cruds = require('./Cruds'); 
const {ProductsModel} = require('../models')
class ProductsService extends Cruds{
        
}


module.exports = new ProductsService(ProductsModel.Model, ProductsModel.Schema);