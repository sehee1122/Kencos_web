module.exports = function (sequelize, DataTypes) {
  const patientTab = sequelize.define('PatientTab', {
    PID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    PName: DataTypes.STRING(64),
    PLastName: DataTypes.STRING(64),
    PFirstName: DataTypes.STRING(64),
    PSex: DataTypes.STRING(2),
    PBirthDate: DataTypes.STRING(8),
    PBirthTime: DataTypes.STRING(8),
    Comments: DataTypes.STRING(64),
    InsertDate: DataTypes.STRING(8),
    InsertTime: DataTypes.STRING(8),
    HospitalID: DataTypes.INTEGER,
    PKName: DataTypes.STRING(64),
    PEName: DataTypes.STRING(64),
    Reserved1: DataTypes.INTEGER,
    Reserved2: DataTypes.INTEGER,
    Reserved3: DataTypes.INTEGER,
    Reserved4: DataTypes.STRING(255),
    Reserved5: DataTypes.STRING(255),
    Reserved6: DataTypes.STRING(255),
    Reserved7: DataTypes.STRING(255),
    Reserved8: DataTypes.STRING(255),
    Reserved9: DataTypes.STRING(255),
    Reserved10: DataTypes.STRING(255),
    insname: DataTypes.STRING(255),
    PatKey: DataTypes.STRING(64)
  },
  {
    indexes: [
      { fields: ['PName'] }
    ],
    tableName: 'PatientTab'
  });

  patientTab.removeAttribute('id');
  return patientTab;
};
