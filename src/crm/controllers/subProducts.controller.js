const service = require('../../services').SubProductsService
const { ResponseMessages } = require('../../common');

class SubProductsController {
    async createRecord(req,res,next){
        try {   
            const params = req.body
            const result =await service.create(params)
            return ApiResponse(res,true,ResponseMessages.RECORD_CREATE_SUCCESS)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new SubProductsController()