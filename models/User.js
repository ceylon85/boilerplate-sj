const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//mongo에서 save하기 전에 실행 next하면 index.js(router)의 save method로 간다.
userSchema.pre("save", function (next) {
  var user = this; //user 모델을 this로 받음
  //model안의 password 필드가 변화될 때만 bcrypt를 이용, 암호화 해준다.
  if (user.isModified("password")) {
    //bcrypt를 가져와 salt를 만든다. saltRounds를 넣고 콜백으로 err, salt를 받는다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      //암호화되지 않은 myPlaintextPassword 는 user.password
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash; //비밀번호를 암호화시킨다.
        next(); //암호화가 되면 next: index.js user.save method로 이동
      });
    });
  } else {
    //그렇지 않을 때는 바로 next()로 이동
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plain pw도 암호화해서 db에 있는 pw와 같은지 확인
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  var user = this;
  //jsonwebtoken을 이용해서 token을 생성
  var token = jwt.sign(user._id.toHexString(), "secretToken");
  // user._id + 'secretToken' = token
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  //토큰을 decode 한다.
  jwt.verify(token, 'secretToken', function (err, decoded) {    //유저 아이디를 이용해서 유저를 찾은 다음에("id": decoded)
    //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인("token": token)
    user.findOne({ "_id": decoded, "token": token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user)
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
