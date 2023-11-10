'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  connection.init({
    conn_user_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'connection',
  });
  return connection;
};