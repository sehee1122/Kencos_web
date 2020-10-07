const sha256 = require('js-sha256');
const db = require('db');
const { generateToken } = require('lib/token');

exports.login = async (ctx) => {
  const { id, password } = ctx.request.body;
  const hashPassword = sha256(password);

  try {
    const user = await db.AdvUserTab.findOne({ where: { USERID: id, PASSWORD: hashPassword } });
    if (!user) {
      ctx.status = 403;
      return;
    }

    const { USERID: userID, USERNAME: userName } = user;

    const token = await generateToken({
      user: {
        userID,
        userName
      }
    }, 'user');

    ctx.cookies.set('access_token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    });

    ctx.response.status = 200;
    ctx.body = {
      userID,
      userName,
      token
    };
  } catch (error) {
    ctx.throw(error, 500);
  }
};

exports.logout = async (ctx) => {
  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  });
  ctx.status = 204;
};
