const { User } = require("../models/User");

//인증 처리를 하는 곳
let auth = (req, res, next) => {
  //client 쿠키에서 token을 가져온다.
  let token = req.cookies.x_auth;
  // 토큰을 복호화(decode) 한 후 유저를 찾는다. => User모델로 이동
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    //req에 넣어줌으로 router에서 req로 받을 수 있다.
    req.token = token;
    req.user = user;
    next();
  });
  // 유저가 있으면 인증 O

  // 유저가 없으면 인증 X
};

module.exports = { auth };
