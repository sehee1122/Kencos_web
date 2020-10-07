const { generateToken, decodeToken } = require('../token');

module.exports = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');

  if (!token) {
    ctx.request.user = null;
    return next();
  }

  try {
    const decoded = await decodeToken(token);
    const { user } = decoded;

    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
      const freshToken = await generateToken({ user }, 'user');
      ctx.cookies.set('access_token', freshToken, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 3
      });
    }
    ctx.request.user = user;
  } catch (e) {
    ctx.request.user = null;
  }
  return next();
};
