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

var blogs = [
{
	id:001,
	name:'hanfeng',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'He is a 2B youth!',
    hearts:10000
},
{
	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'I am cuican!',
    hearts:12000
},
{
	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql','ruby','音乐','美术','文学','美学','mysql','ruby','音乐','美术'],
    evaluation:'I am cuican!',
    hearts:12000
},
{
	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'I am cuican!',
    hearts:12000
},
{
	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!I am cuican!',
    hearts:12000
},
{

	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'I am cuican!',
    hearts:12000

},
{

	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'I am cuican!',
    hearts:12000

},
{

	id:002,
	name:'cuican',
	blogUri:"http://localhost:3000/AboutUs",
    tags:['java','c#','javascript','mysql'],
    evaluation:'I am cuican!',
    hearts:12000

}
];


function *timeLine() {
	this.body = yield render('timeline');
}

function *aboutUs() {
	this.body = yield render('aboutUs');
}
function *home(){
	this.body = yield render('home',{blogs:blogs});
}

app.listen(3000);