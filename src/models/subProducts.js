const {model,Schema} = require("mongoose");
const subProductsSchema = Schema({
  recordId: { type: String },
  title: {
    en: { type: String },
    ar: { type: String },
  },
  description: {
    en: { type: String},
    ar: { type: String },
  },
  product : {type:Schema.Types.ObjectId, ref:"products" },

  image: { type: String },
});

module.exports.Model = model('subProducts', subProductsSchema);
module.exports.Schema = subProductsSchema;