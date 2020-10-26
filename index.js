const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

//application/x-www-form-urlencoded 분석할수 있게
app.use(bodyParser.urlencoded({ extended: true }));

//application/json 분석할수 있게
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//라우트
app.get("/", (req, res) => res.send("Hello World!12"));

//회원가입을 위한 라우트
app.post("/register", (req, res) => {
  //회원 가입할 때 필요한 정보들을 client 에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err }); // 실패했을때
    return res.status(200).json({
      success: true,
    }); // 성공했을때
  }); //몽고디비 메서드
});

app.listen(port, () => console.log(`Exaple app listening on port ${port}`));
