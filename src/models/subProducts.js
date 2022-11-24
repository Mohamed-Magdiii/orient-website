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

  image: { type: String },
});

module.exports.Model = model('subProducts', subProductsSchema);
module.exports.Schema = subProductsSchema;