const db = require('db');
const { Sequelize: { QueryTypes }} = require('db');

exports.worklist = async (ctx) => {
  try {
    const worklist = await db.sequelize.query(
      `
        SELECT
          TOP 100
          StudyTab.StudyKey,
          StudyTab.AccessNum,
          StudyTab.Modality,
          StudyTab.PID,
          StudyTab.PName
        FROM StudyTab
      `,
      {
        type: QueryTypes.SELECT
      }
    );

    ctx.response.status = 200;
    ctx.body = worklist;
  } catch (error) {
    ctx.throw(error, 500);
  }
};