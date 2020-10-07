module.exports = function (sequelize, DataTypes) {
  return sequelize.define('SeriesTab', {
    StudyKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    SeriesKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    StudyInsUID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    SeriesInsUID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    SeriesNum: DataTypes.INTEGER,
    SeriesCurSeqNum: DataTypes.INTEGER,
    Modality: DataTypes.STRING(16),
    BodyPart: DataTypes.STRING(255),
    SeriesDesc: DataTypes.STRING(255),
    ProtocolName: DataTypes.STRING(64),
    ViewPosition: DataTypes.STRING(255),
    Laterality: DataTypes.STRING(64),
    Comments: DataTypes.STRING(255),
    ImageCnt: DataTypes.INTEGER,
    VerifyFlag: DataTypes.INTEGER,
    DelFlag: DataTypes.INTEGER,
    InsertDate: DataTypes.STRING(8),
    InsertTime: DataTypes.STRING(8),
    HospitalID: DataTypes.INTEGER,
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
    SeriesType: DataTypes.STRING(64),
    SeriesDate: DataTypes.STRING(8),
    SeriesTime: DataTypes.STRING(8),
    ImageDirection: DataTypes.STRING(16),
    MovieCnt: DataTypes.INTEGER,
    Manufacturer: DataTypes.STRING(64),
    ManuModelName: DataTypes.STRING(64),
    SWVersion: DataTypes.STRING(64),
    PatPosition: DataTypes.STRING(16),
    PatOrientation: DataTypes.STRING(16)
  },
  {
    indexes: [
      { fields: ['StudyKey'] },
      { fields: ['StudyInsUID'] }
    ],
    tableName: 'SeriesTab'
  });
};
