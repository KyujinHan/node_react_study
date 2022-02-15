const express = require('express') // express 모듈 가져오기
const app = express() // 앱 만들어주는 function?
const port = 5000 // 서버 (아무거나해도 됨)

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kyujinHan:hkj50612068@awscluster.bcu5p.mongodb.net/react_node_study?retryWrites=true&w=majority').then(() => console.log("MongoDB Connected...")).catch(err => console.log(err))



app.get("/",(req,res) => res.send("Hello World!")) // app에서 보여주는 항목
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // 콘솔 실행시?