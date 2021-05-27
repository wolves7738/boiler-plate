const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const port = 5000

const config = require('./config/key');

//application/x-www-form-urlencoded (url) 타입 분석
app.use(bodyParser.urlencoded({extended: true}));
//application/json (json) 타입 분석
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 하이요')
})


app.post('/register', (req, res) => {
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //정보들을 데이터베이스에 넣어준다.
  const user = new User(req.body)
  
  user.save((err, userInfo) => {
    if(err) {
      console.log(err);
      return res.json({ success: false, err}) //에러가 있다면 json 형태로 success: false를 보내줌.
    }else{
      return res.status(200).json({
        success: true
      })  
    } 
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});