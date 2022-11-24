/* eslint-disable linebreak-style */
const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const jwt = require('jsonwebtoken');
const { keys } = require('../common');

const UserSchema = new Schema({
  recordId: { type: String },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  roleId: {
    type: Schema.ObjectId,
    ref: 'Role',
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  mobile: String,
  phone: String,
  referalCode: String,
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

UserSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({
    _id: this.id,
    email: this.email,
    is_active: this.is_active,
  }, keys.jwtKey,
  { expiresIn: '1h' });
  return token;
};

UserSchema.index({
  firstName: 1,
  lastName: 1,
  email: 1,
  phone: 1,
  createdAt: 1,
});

UserSchema.plugin(mongoosePaginate);
// UserSchema.index({ rec: 1 });

module.exports.Model = model('users', UserSchema);
module.exports.Schema = UserSchema;
