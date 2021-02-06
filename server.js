const express = require('express'); //npm으로 설치한 express모듈을 가지고 온다.

const app = express();

const server = app.listen(2000, () => {
    console.log('Start Server : localhost:2000');
});

app.set('views', __dirname + '/views'); //__dirname은 현재 디렉토리를 의미하며 거기서 views폴더를 의미한다. 
//(html 소스를 가지고 오기위해서 app.set을 하여 가지고 온다)

app.set('view engine', 'ejs'); //html을 보여줄 엔진을 선언한다.(ejs(Embedded Javascript)라는 모듈 사용) (ejs는 html과 javascript를 같이 쓸 수 있게 해주는 엔진이다.)

app.engine('html', require('ejs').renderFile); //html을 파일을 가지고 올 ejs라는 엔진을 선언한다.

app.get('/', function(req, res) {
    res.render('index.html') //html을 가지고 올 떄는 send가 아닌 render로 응답한다.
})

app.get('/admin', function(req, res) { //localhost:5000/about페이지의 내용
    res.send('admin page')
})

app.get('server', function(req, res) {
    res.send('server respond')
})

app.get('/about', function(req, res) {
    res.render('about.html'); //이미 set을 해줬기 때문에 html파일만 가지고 오면 된다.
})