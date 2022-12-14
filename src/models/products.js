const {model, Schema} = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")
const {CONSTANTS} = require("../common")
const ProductSchema = Schema({
  recordId: { type: String },
  title: {
    en: { type: String,required:true },
    ar: { type: String ,required:true},
  },
  description: {
    en: { type: String , required:true},
    ar: { type: String },
  },
  image: { type: String },
  type: {
    type: String,
    enum: Object.keys(CONSTANTS.PRODUCTS_TYPE),
  },
},
{ timestamps: true },
);
ProductSchema.plugin(mongoosePaginate);
ProductSchema.index({
  title: 1,
  key: 1,
  createdAt: 1,
});
module.exports.Model = model('products', ProductSchema);
module.exports.Schema = ProductSchema;