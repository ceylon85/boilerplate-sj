// 기본적인 시작점
const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sj_lee:mongo1234@cluster0-mupkj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB 연결중...'))
.catch(err => console.log(err))
app.get('/', (req, res)=> res.send('Hello world!!'))

app.listen(port, () => console.log(`port는 ${port}`))