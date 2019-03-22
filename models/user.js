var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 20],
        isAlphanumeric: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  });

  user.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  user.hook("beforeCreate", function(userInfo) {
    user.password = bcrypt.hashSync(
      userInfo.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return user;
};
