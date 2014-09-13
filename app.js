var koa = require('koa')
  , render = require('./lib/render')
  , router = require('koa-router')
  , app = koa();

app.use(router(app));

app.get('/TimeLine', timeLine);
app.get('/AboutUs', aboutUs);

function *timeLine() {
	this.body = yield render('timeLine');
}

function *aboutUs() {
	this.body = "aboutUs";
}

app.listen(3000);