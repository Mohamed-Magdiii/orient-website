const service = require('../../services').productsService
const { ResponseMessages,CONSTANTS } = require('../../common');
const  SubProductsService  = require('../../services').SubProductsService;
const { ApiResponse } = require('../../utils');

class ProductsController {
    async createRecord(req,res,next){
        try {   
            const params = req.body
            const result =await service.create(params)
            return ApiResponse(res,true,ResponseMessages.RECORD_CREATE_SUCCESS,result)
        } catch (error) {
            next(error)
        }
    }

    async updateRecord(req,res,next) {
        try {
            const {id} = req.params
            const result = await service.updateById(id, req.body)
            return ApiResponse(res,true,ResponseMessages.RECORD_UPDATE_SUCCESS,result)
        } catch (error) {
            next(error)
        }
    }

    async deleteRecord(req,res,next){
        try {
            const {id} = req.params
            console.log(id)
            await service.deleteById(id)
            await SubProductsService.Model.deleteMany({ product: id })
            return ApiResponse(res,true,ResponseMessages.RECORD_DELETE_SUCCESS)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new ProductsController()