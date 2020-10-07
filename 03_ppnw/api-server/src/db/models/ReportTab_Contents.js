module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ReportTab_Contents', {
    StudyKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    HistNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    RecNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    Interpretation: DataTypes.STRING(2000),
    Conclusion: DataTypes.STRING(2000),
    HospitalID: DataTypes.INTEGER,
    Recommend: DataTypes.STRING(2000),
    Finding_New: DataTypes.STRING(2000),
    Conclusion_New: DataTypes.STRING(2000),
    Recommend_New: DataTypes.STRING(2000),
    Description: 'VARBINARY(2000)'
  },
  {
    indexes: [
      { fields: ['StudyKey', 'HistNo'] }
    ],
    tableName: 'ReportTab_Contents'
  });
};
