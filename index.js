var koa = require('koa')
var render = require('./lib/render')
var router = require('koa-router')
var staticServer = require('koa-static')
var path = require('path');

var app = koa();
var bloggers = [];

//处理静态资源文件夹
app.use(staticServer(path.join(__dirname, 'assets')));

app.use(router(app));

app.get('/',bloggerList);
app.get('/Bloggers',bloggerList);
app.get('/Blogger/:id',blogger)
app.get('/TimeLine', timeLine);
app.get('/AboutUs', aboutUs);

function *bloggerList(){
	 for(var i = 0; i < 12; i++) {
	    var blogger = {
			id:001,
			name:'hanfeng',
			blogImageSrc: "/img/team/1.jpg",
			blogUri:"http://localhost:3000/Blogger/001",
		    tags:['java','c#','javascript','mysql'],
		    evaluation:'He is a 2B youth! He is a 2B youth! He is a 2B youth! He is a 2B youth! ',
		    hearts:10000
	    };
	    bloggers.push(blogger);
	}
	this.body = yield render('home',{bloggers:bloggers});
}

function *blogger() {
	this.body = yield render('blogger');
	//this.body = this.params.id;
}

function *timeLine() {
	this.body = yield render('timeline');
}

function *aboutUs() {
	this.body = yield render('aboutUs');
}

app.listen(3000);