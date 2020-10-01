module.exports = function(sequelize, DataTypes) {
  console.log('user.js hihi')
  let usr = sequelize.define("TodoList_copy", {
    id: {
      filed: "id",
      type: DataTypes.INT(11),
      unique: true,
      auto_increment,
      allowNull: false
    },
    dueDate: {
      field: "dueDate",
      type: DataTypes.TEXT,
      allowNull: false
    },
    toDo: {
      field: "toDo",
      type: DataTypes.MEDIUMTEXT,
      allowNull: false
    },
    toDetails: {
      field: "toDetails",
      type: DataTypes.MEDIUMTEXT,
      allowNull: true
    },
    toColor: {
      field: "toColor",
      type: DataTypes.CHAR,
      allowNull: true
    }
  }, {
  })
}
