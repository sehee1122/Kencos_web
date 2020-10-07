module.exports = function (sequelize, DataTypes) {
  return sequelize.define('StudyTab', {
    StudyKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    StudyInsUID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    AccessNum: DataTypes.STRING(64),
    StudyDate: {
      type: DataTypes.STRING(8)
    },
    StudyTime: DataTypes.STRING(8),
    StudyID: DataTypes.STRING(16),
    StudyDesc: DataTypes.STRING(255),
    Modality: DataTypes.STRING(16),
    BodyPart: DataTypes.STRING(255),
    PID: {
      type: DataTypes.STRING(64)
    },
    PName: {
      type: DataTypes.STRING(64)
    },
    PLastName: DataTypes.STRING(64),
    PFirstName: DataTypes.STRING(64),
    PKName: DataTypes.STRING(64),
    PEName: DataTypes.STRING(64),
    PSex: DataTypes.STRING(2),
    PBirthDateTime: DataTypes.STRING(16),
    PatAge: DataTypes.STRING(12),
    ExamStatus: DataTypes.INTEGER,
    ReportStatus: DataTypes.INTEGER,
    SeriesCnt: DataTypes.INTEGER,
    ImageCnt: DataTypes.INTEGER,
    VerifyFlag: DataTypes.INTEGER,
    VerifyDateTime: DataTypes.STRING(14),
    Dept: DataTypes.STRING(64),
    RefPhysicianName: DataTypes.STRING(64),
    ReqPhysicianName: DataTypes.STRING(64),
    PerfPhysicianName: DataTypes.STRING(64),
    PatKind: DataTypes.STRING(1),
    Ward: DataTypes.STRING(64),
    SickName: DataTypes.STRING(200),
    AddedInfo: DataTypes.STRING(255),
    HisComments: DataTypes.STRING(512),
    HisAddedInfo1: DataTypes.STRING(255),
    HisAddedInfo2: DataTypes.STRING(255),
    HisAddedInfo3: DataTypes.STRING(255),
    InsName: DataTypes.STRING(64),
    StationName: DataTypes.STRING(64),
    ConfirmDateTime: DataTypes.STRING(16),
    ReadingDateTime: DataTypes.STRING(16),
    TranscribedDateTime: DataTypes.STRING(16),
    ReadType: DataTypes.INTEGER,
    ReadCode: DataTypes.STRING(64),
    ReadCodeDesc: DataTypes.STRING(200),
    ReadingDr: DataTypes.STRING(64),
    ConfirmDr: DataTypes.STRING(64),
    Transcriptionist: DataTypes.STRING(64),
    TeachingCased: DataTypes.INTEGER,
    StereoCount: DataTypes.INTEGER,
    ProtocolName: DataTypes.STRING(255),
    ViewPosition: DataTypes.STRING(255),
    Laterality: DataTypes.STRING(255),
    Reason4Study: DataTypes.STRING(255),
    Comments: DataTypes.STRING(255),
    ArchStatus: DataTypes.INTEGER,
    CompStatus: DataTypes.INTEGER,
    DelFlag: DataTypes.INTEGER,
    BackupStatus: DataTypes.INTEGER,
    BackupLabel: DataTypes.STRING(64),
    BackupDateTime: DataTypes.STRING(16),
    MismatchFlag: DataTypes.INTEGER,
    ReadingPriority: DataTypes.INTEGER,
    InsertDate: {
      type: DataTypes.STRING(8)
    },
    InsertTime: DataTypes.STRING(8),
    HospitalID: DataTypes.INTEGER,
    BurnCnt: DataTypes.INTEGER,
    BurnDateTime: DataTypes.STRING(16),
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
    ValidateFlag: DataTypes.INTEGER,
    StudyType: DataTypes.STRING(64),
    AbnormalPatient: DataTypes.INTEGER,
    TBFlag: DataTypes.INTEGER,
    ExamCode: DataTypes.STRING(64),
    PhysicianName: DataTypes.STRING(64),
    SendStatus: DataTypes.INTEGER,
    SockStatus: DataTypes.INTEGER,
    VerifyTime: DataTypes.STRING(14),
    AccessTime: DataTypes.STRING(8),
    AccessCnt: DataTypes.INTEGER,
    FetchReqTime: DataTypes.STRING(14),
    PhysicianID: DataTypes.STRING(32),
    StdSickNm: DataTypes.STRING(200),
    RISStatus: DataTypes.INTEGER,
    StdAddedInfo: DataTypes.STRING(100),
    StdHisComments: DataTypes.STRING(255),
    StorageId: DataTypes.INTEGER,
    SourceAETitle: DataTypes.STRING(16),
    PhysicianName2Read: DataTypes.STRING(64),
    UserDef1: DataTypes.STRING(64),
    UserDef2: DataTypes.STRING(64),
    UserDef3: DataTypes.STRING(64),
    ReqProcID: DataTypes.STRING(16),
    BackUpFlag: DataTypes.INTEGER,
    ResultStatus: DataTypes.STRING(8),
    ReadDr1: DataTypes.STRING(32),
    ReadDr2: DataTypes.STRING(32),
    BackupVolumeName: DataTypes.STRING(32),
    BackupSubVolume: DataTypes.STRING(32),
    WebStatus: DataTypes.INTEGER,
    PPASTATUS: DataTypes.INTEGER,
    WebSendStatus: DataTypes.INTEGER,
    ReferToDrID: DataTypes.STRING(64),
    ReferToDrName: DataTypes.STRING(64),
    PatKey: DataTypes.STRING(64),
    SeriesMovieCnt: DataTypes.INTEGER,
    MovieCnt: DataTypes.INTEGER,
    ReadingKeyword: DataTypes.STRING(128),
    MovieFlag: DataTypes.INTEGER,
    OtherSCPSendStatus: DataTypes.INTEGER,
    test: DataTypes.INTEGER,
    Transcriptionist2: DataTypes.STRING(64),
    studydate2: DataTypes.STRING(14),
    GIGWAN_CD: DataTypes.STRING(7),
    GIGWAN_NM: DataTypes.STRING(255),
    SY_STAT: DataTypes.STRING(1),
    SINBUN_NM: DataTypes.STRING(255),
    CURR_ROOM_NO: DataTypes.STRING(12),
    CALL_NO: DataTypes.STRING(4),
    ReqReadStatus2: DataTypes.INTEGER,
    ClinicianName1: DataTypes.STRING(64),
    ClinicalDateTime1: DataTypes.STRING(16),
    ClinicalDateTime2: DataTypes.STRING(16),
    ClinicianName2: DataTypes.STRING(64),
    OperatorsName: DataTypes.STRING(64),
    StationFilmRoom: DataTypes.STRING(64),
    ReqReadStatus: DataTypes.INTEGER,
    RequestReadStatus: DataTypes.INTEGER,
    FolderIDs: DataTypes.STRING(255),
    KeyImageFlag: DataTypes.INTEGER,
    Verifier: DataTypes.STRING(64),
    Decision: DataTypes.STRING(10),
    OpenStatus: DataTypes.INTEGER,
    MobileStoredFlag: {
      type: DataTypes.INTEGER
    },
    MobileStoredTime: {
      type: DataTypes.STRING(32)
    },
    AETITLE: DataTypes.STRING(64),
    DAP: DataTypes.DECIMAL(10, 6),
    MigrationFlag: DataTypes.STRING(1),
    Updated: DataTypes.STRING(14),
    TRANSSYNTAXUID: DataTypes.STRING(64),
    memo: DataTypes.INTEGER,
    OperatorName: DataTypes.STRING(64)
  },
  {
    indexes: [
      { fields: ['StudyInsUID'] },
      { fields: ['StudyDate'] },
      { fields: ['PName'] },
      { fields: ['PID'] },
      { fields: ['MobileStoredTime'] },
      { fields: ['MobileStoredFlag'] },
      { fields: ['InsertDate'] }
    ],
    tableName: 'StudyTab'
  });
};
