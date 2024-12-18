const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');//이거 수정
app.engine('ejs', require('ejs').__express);//경로지정

app.get('/', function (요청, 응답) {
    응답.send('test connect..')
})

app.get('/testfile', function (요청, 응답) {
    응답.sendFile(__dirname + 'index.html')
})

app.get('/ejs', function (요청, 응답) {
    응답.render('index')
})

app.listen(3000, (에러) => {
    console.log(에러)
})