var koa = require('koa')
var render = require('./lib/render')
var router = require('koa-router')
var staticServer = require('koa-static')
var path = require('path');

var app = koa();

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('X-Response-Time', ms + 'ms');
});

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

//处理静态资源文件夹
app.use(staticServer(path.join(__dirname, 'assets')));

app.use(router(app));

app.get('/',bloggerList);
app.get('/Bloggers',bloggerList);
app.get('/Blogger/:id',blogger)
app.get('/User/:id',user);
app.get('/TimeLine', timeLine);
app.get('/AboutUs', aboutUs);

function *bloggerList(){
	var bloggers = [];
	 for(var i = 0; i < 12; i++) {
	    var blogger = {
			id: 001,
			name: "顾城",
			blogImageSrc: "/img/team/1.jpg",
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
			blogImageSrc: "/img/team/1.jpg",
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

app.listen(3000);

console.log("start listen 3000 ... ...");