const { ResponseMessages } = require("../../common");
const { ApiResponse } = require("../../utils");
const service = require("../../services").TeamsService
const fs = require('fs');
const { resolve } = require("path");
class TeamsController {
  async createRecord(req, res, next) {
    try {
      const result = await service.createNewTeamMember(req);
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

  async deleteRecord(req,res,next){
    try {
      const {id}  = req.params
      const find = await service.findById(id)
      if(find){
        fs.unlink(`./uploads/${find.image}`, function(){
          return true
        })
        }
        await service.deleteById(id)
      
      ApiResponse(res,true,ResponseMessages.RECORD_DELETE_SUCCESS)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new TeamsController();
