// 기본적인 시작점
const express = require("express");
const app = express();
const port = 5000;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application.json
app.use(bodyParser.json());
app.use(cookieParser());

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

//('api/users')를 정해서 routes에서는 엔드포인트만 사용할 수 있게 함
app.use('/api/users', require('./routes/users'));

app.listen(port, () => console.log(`port는 ${port}`));


// app.get("/", (req, res) => res.send("Hello world이다!! Haha"));

// app.get('/api/hello', (req, res)=> {
  
//   res.send('안녕하세요~~5000번 포트')
// })


// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
