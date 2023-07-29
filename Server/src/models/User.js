const { DataTypes } = require("sequelize");

module.exports = (sqz) => {
  sequelize.define(
    "User",
    {
      id: {
        primarykey: true,
        type: DataTypes.UUID,
        allownull: false,
        defaultvalue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allownull: false,
      },
    },
    { timestamps: false }
  );
};
