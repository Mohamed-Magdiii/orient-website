
const Cruds = require('./Cruds');
const {subProductsModel} = require('../models')

class SubProductsService extends Cruds{
        
}


module.exports = new SubProductsService(subProductsModel.Model, subProductsModel.Schema);