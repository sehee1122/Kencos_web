module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ReportTab', {
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
    StudyInsUID: DataTypes.STRING(64),
    PID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    AccessNum: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    StudyDate: DataTypes.STRING(8),
    StudyTime: DataTypes.STRING(6),
    ReadingDrID: DataTypes.STRING(64),
    ReadingDr: DataTypes.STRING(64),
    ConfirmDrID: DataTypes.STRING(64),
    ConfirmDr: DataTypes.STRING(64),
    ReadingDate: DataTypes.STRING(8),
    ReadingTime: DataTypes.STRING(6),
    ConfirmDate: DataTypes.STRING(8),
    ConfirmTime: DataTypes.STRING(6),
    InsertDate: DataTypes.STRING(8),
    InsertTime: DataTypes.STRING(6),
    SectionCode: DataTypes.STRING(8),
    ReadCode: DataTypes.STRING(64),
    ReportStatus: DataTypes.INTEGER,
    InserterName: DataTypes.STRING(64),
    TranscriptionistID: DataTypes.STRING(64),
    Transcriptionist: DataTypes.STRING(64),
    TranscribedDateTime: DataTypes.STRING(14),
    ACRCode: DataTypes.STRING(32),
    PName: DataTypes.STRING(64),
    PLastName: DataTypes.STRING(64),
    PFirstName: DataTypes.STRING(64),
    PKName: DataTypes.STRING(64),
    PEName: DataTypes.STRING(64),
    PSex: DataTypes.STRING(2),
    PBirthDateTime: DataTypes.STRING(16),
    Dept: DataTypes.STRING(64),
    StudyDesc: DataTypes.STRING(255),
    Modality: DataTypes.STRING(16),
    Reason4Study: DataTypes.STRING(255),
    SickName: DataTypes.STRING(255),
    HisComments: DataTypes.STRING(255),
    ResultSendStatus: DataTypes.INTEGER,
    InserterProcess: DataTypes.STRING(1),
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
    CertificationStatus: DataTypes.INTEGER,
    CertificationKey: DataTypes.STRING(2048),
    SIGNSTR: DataTypes.STRING(2048),
    CERTIFICATION: DataTypes.STRING(400),
    OPN_CODE: DataTypes.STRING(40),
    OPN_TITLE: DataTypes.STRING(400),
    RECOMMEND_CODE: DataTypes.STRING(40)
  },
  {
    indexes: [
      { fields: ['StudyKey'] },
      { fields: ['PID', 'AccessNum'] },
      { fields: ['ConfirmDate'] }
    ],
    tableName: 'ReportTab'
  });
};
