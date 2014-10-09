var koa = require('koa');
var render = require('./lib/render');
var router = require('koa-router');
var path = require('path');
var staticCache = require('koa-static-cache');

var app = koa();

//处理静态资源文件夹
app.use(staticCache(path.join(__dirname, 'assets')));
app.use(staticCache(path.join(__dirname, 'public'),{	
	maxAge: 24*60*60
}));

app.use(router(app));


app.get('/',bloggerList);
app.get('/Bloggers',bloggerList);
app.get('/Blogger/:id',blogger)
app.get('/User/:id',user);
app.get('/Gatekeep',gatekeep);
app.get('/TimeLine', timeLine);
app.get('/AboutUs', aboutUs);
app.get('/Registration', registration);
app.get('/Login', login);

function *bloggerList(){
	var bloggers = [];
	 for(var i = 0; i < 12; i++) {
	    var blogger = {
			id: 001,
			name: "顾城",
			blogImageSrc: "/blogImg/1.png",
			blogUri: "http://localhost:3000/Blogger/001",
			twitter: "http://www.twitter.com",
			weibo: "http://www.weibo.com",
		    tags: ["java","c#","javascript","mysql"],
		    evaluations: ["你,一会看我,一会看云,我觉得,你看我时很远,你看云时很近.--顾城 <<远和近>>"],
		    hearts: 10000
	    };
	    bloggers.push(blogger);
	}
	this.body = yield render('home',{bloggers:bloggers});
}

function *blogger() {
	    var blogger = {
			id: 001,
			name: "顾城",
			blogImageSrc: "/blogImg/coolshell.png",
			blogUri: "http://localhost:3000/Blogger/001",
			twitter: "http://www.twitter.com",
			weibo: "http://www.weibo.com",
		    tags: ["java","c#","javascript","mysql"],
		    evaluations: ["你,一会看我,一会看云,我觉得,你看我时很远,你看云时很近.--顾城 <<远和近>>"],
		    hearts: 10000
	    };
	this.body = yield render('blogger',{blogger: blogger});
	//this.body = this.params.id;
}

function *user() {
	this.body = yield render('user');
}

function *gatekeep() {
	this.body = yield render('gatekeep');
}

function *timeLine() {
	var timeLines = [];
	for (var i = 0; i < 12; i++) {
		var timeLine = {
			time : "2012-09-04",
			month : "九月",
			title : "<<避免>> -- 顾城",
			description : "你不愿意种花，你说，我不愿看见它一点点凋落。是的，为了避免结束，你避免了一切开始."
		};	
		timeLines.push(timeLine);
	};	
	this.body = yield render('timeline', {timeLines:timeLines});
}

function *aboutUs() {
	this.body = yield render('aboutUs');
}

function *registration() {
	this.body = yield render('registration');
}

function *login() {
	this.body = yield render('login');
}

app.listen(3000);

console.log("start listen 3000 ... ...");
