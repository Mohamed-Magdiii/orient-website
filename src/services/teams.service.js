
const teamsModel= require('../models').teamsModel
const Cruds = require('./Cruds')
class Teams extends Cruds{

}

module.exports = new Teams(teamsModel.Model,teamsModel.Schema)