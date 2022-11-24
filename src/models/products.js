const {model, Schema} = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")
const ProductSchema = Schema({
  recordId: { type: String },
  title: {
    en: { type: String },
    ar: { type: String },
  },
  description: {
    en: { type: String },
    ar: { type: String },
  },
  image: { type: String },
  type: {
    type: String,
  },
  subProduct  : {type:Schema.Types.ObjectId , ref: 'subProducts'}
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