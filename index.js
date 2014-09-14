var koa = require('koa')
var render = require('./lib/render')
var router = require('koa-router')
var staticServer = require('koa-static')
var path = require('path');

var app = koa();

//处理静态资源文件夹
app.use(staticServer(path.join(__dirname, 'assets')));

app.use(router(app));


app.get('/TimeLine', timeLine);
app.get('/AboutUs', aboutUs);
app.get('/Home',home);

function *timeLine() {
	this.body = yield render('timeline');
}

function *aboutUs() {
	this.body = yield render('aboutUs');
}
function *home(){
	this.body = yield render('home');
}

app.listen(3000);