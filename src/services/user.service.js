const { UserModel } = require('../models');
const { encryptPassword, comparePassword } = require('../utils');
const Cruds = require('./Cruds');

class UserService extends Cruds {
  async createUser(params) {
    const user = await this.findOne({ email: params.email });
    if (user) throw new Error('User already registered.');

    const newUser = new UserModel.Model(params);
    newUser.password = await encryptPassword(newUser.password);

    const userAdded = await newUser.save();
    const token = newUser.generateAuthToken();
    return { user: userAdded, token };
  }

  async loginCrm(email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('Invalid credentials');
    if (!user.isActive) throw new Error('User disabled, please contact admin.');
    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) throw new Error('Invalid credentials');
    if (passwordMatch) {
      const token = UserModel.Model(user).generateAuthToken();
      return {
        token,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        roleId: user.roleId,
      };
    }
    throw new Error('Invalid credentials');
  }
}
module.exports = new UserService(UserModel.Model, UserModel.Schema);
