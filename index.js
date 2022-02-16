const express = require('express') // express 모듈 가져오기
const app = express() // 앱 만들어주는 function?
const port = 5000 // 서버 (아무거나해도 됨)

const config = require('./config/key.js')

const bodyParser = require('body-parser')
const {User} = require('./models/User.js')

// 정보 분석
app.use(bodyParser.urlencoded({extended:true})); // application/x-www-form-urlencoded
app.use(bodyParser.json()) // application/json

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(() => console.log("MongoDB Connected...")).catch(err => console.log(err))



app.get("/",(req,res) => res.send("Hello World!")) // app에서 보여주는 항목


app.post('/register', (req, res)=>{
    // 회원 가입할 때 필요한 정보들을 clinet에서 가져오면
    // 그것들을 데이터 베이스에 넣어둔다.

    
    const user = new User(req.body);

    // mongoDB method
    user.save((err, userInfo)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({success:true}) // status(200)은 성공했다는 의미
    })


})


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // 콘솔 실행시?


