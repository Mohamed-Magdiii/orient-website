
const teamsModel= require('../models').teamsModel
const Cruds = require('./Cruds')
class Teams extends Cruds{
    async createNewTeamMember(params){
    const data = JSON.parse(params.body.data)
    data.image = params.file.filename
    const result = await this.create(data)
    return result
    
}

}

module.exports = new Teams(teamsModel.Model,teamsModel.Schema)