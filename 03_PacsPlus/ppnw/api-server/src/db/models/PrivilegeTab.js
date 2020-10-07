module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PrivilegeTab', {
    UserID: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false
    },
    PrivilegeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    SavePri: DataTypes.INTEGER,
    PrivilegeDesc: DataTypes.STRING(255)
  },
  {
    tableName: 'PrivilegeTab'
  });
};
