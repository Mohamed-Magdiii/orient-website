const {model, Schema} = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")
const {CONSTANTS} = require("../common")
const teamSchema = Schema({
  recordId: { type: String },
  name: {
    en: { type: String,required:true },
    ar: { type: String ,required:true},
  },
  title: {
    en: { type: String , required:true},
    ar: { type: String },
  },
  image: {type:String},
  isTopRated:{type:Boolean},
},
{ timestamps: true },
);
teamSchema.plugin(mongoosePaginate);
teamSchema.index({
  title: 1,
  key: 1,
  createdAt: 1,
});
module.exports.Model = model('teams', teamSchema);
module.exports.Schema = teamSchema;