module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ThumbnailTab', {
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
    ImageKey: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    ImageData: DataTypes.BLOB,
    Laterality: DataTypes.STRING(16),
    ProtocolName: DataTypes.STRING(64),
    ImageComments: DataTypes.STRING(255),
    ImageData2: DataTypes.STRING
  }, {
    tableName: 'ThumbnailTab'
  });
};
