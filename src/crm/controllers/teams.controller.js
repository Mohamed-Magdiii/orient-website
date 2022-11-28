const { ResponseMessages } = require("../../common");
const { ApiResponse } = require("../../utils");
const service = require("../../services").TeamsService
class TeamsController {
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
//   async updateRecord(req, res, next) {
//     try {
//       const { id } = req.params;
//       const result = await service.update(id, req.body);
//       return ApiResponse(
//         res,
//         true,
//         ResponseMessages.RECORD_UPDATE_SUCCESS,
//         result
//       );
//     } catch (error) {
//       next(error);
//     }
//   }
//   async deleteRecord(req,res,next){
//     try {

//       await service.deleteById(id)
//       ApiResponse(res,true,ResponseMessages.RECORD_DELETE_SUCCESS)
//     } catch (error) {
//       next(error)
//     }
//   }
}

module.exports = new TeamsController();
