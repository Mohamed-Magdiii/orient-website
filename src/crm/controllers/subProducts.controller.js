const service = require("../../services").SubProductsService;
const { ResponseMessages } = require("../../common");
const { ApiResponse } = require("../../utils");

class SubProductsController {
  async createRecord(req, res, next) {
    try {
      const params = req.body;
      const result = await service.create(params);
      return ApiResponse(
        res,
        true,
        ResponseMessages.RECORD_CREATE_SUCCESS,
        result
      );
    } catch (error) {
      next(error);
    }
  }
  async updateRecord(req, res, next) {
    try {
      const { id } = req.params;
      const result = await service.update(id, req.body);
      return ApiResponse(
        res,
        true,
        ResponseMessages.RECORD_UPDATE_SUCCESS,
        result
      );
    } catch (error) {
      next(error);
    }
  }
  async deleteRecord(req,res,next){
    try {
      const {id} = req.params
      const count = await service.count({_id: id})
      console.log(count)
      if(count <= 0){
        return next(new Error(`no sub-product to delete`));
      }
      await service.deleteById(id)
      ApiResponse(res,true,ResponseMessages.RECORD_DELETE_SUCCESS)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new SubProductsController();
