// 기본적인 시작점
const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//application.json
app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => res.send("Hello world이다!! Haha"));

app.post("/register", (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면

  //그것들을 DB에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.post("/login", (req, res) => {
  //요청된 email이 DB에 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) 
      return res.json({
        loginSuccess: false,
        message: "해당 이메일에 해당하는 유저가 없습니다",
      });
    
    //요청된 email이 DB에 있다면 pw가 맞는 pw인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다."
        });
      //pw까지 같다면 token 생성 , jsonwebtoken 다운로드
      //파라미터로 들어가는 user 정보는 User 모델의 generateToken에서 온 user정보
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //token을 저장한다. 쿠키에 저장
        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

app.listen(port, () => console.log(`port는 ${port}`));
