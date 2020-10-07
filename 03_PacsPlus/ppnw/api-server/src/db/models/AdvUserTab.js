module.exports = function (sequelize, DataTypes) {
  return sequelize.define('AdvUserTab', {
    USERID: {
      type: DataTypes.STRING(32),
      primaryKey: true,
      allowNull: false
    },
    GROUPID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    USERNAME: DataTypes.STRING(64),
    USEPWDCHANGE: DataTypes.INTEGER,
    USEPWDEXPIRE: DataTypes.INTEGER,
    PWDEXPIREDATE: DataTypes.STRING(8),
    PWDEXPIREALERTDAY: DataTypes.INTEGER,
    ACCOUNTSUSPENDED: DataTypes.INTEGER,
    PWDFORCECHANGE: DataTypes.INTEGER,
    PWDVALIDDAY: DataTypes.STRING(8),
    USERCREATEDATE: DataTypes.STRING(8),
    PWDMODIFYDATE: DataTypes.STRING(8),
    DEPT: DataTypes.STRING(50),
    POSITION: DataTypes.STRING(50),
    TELNO: DataTypes.STRING(50),
    COMMENTS: DataTypes.STRING(255),
    TODAYMESSAGE: DataTypes.STRING(255),
    HOSPITALID: DataTypes.INTEGER,
    PASSWORD2: DataTypes.STRING(1024),
    LicenseNumber: DataTypes.STRING(32),
    PWWrongCount: DataTypes.INTEGER,
    UserSign: DataTypes.BLOB
  }, {
    tableName: 'ADVUSERTAB'
  });
};
