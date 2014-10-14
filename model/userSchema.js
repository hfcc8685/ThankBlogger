var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * [UserSchema description]
 * id: 用户唯一标识
 * name: 用户登录名
 * pwd: 用户密码
 * heartBloggers: 关注的博主
 * recommendBloggers: 推荐的博主
 * blackListBloggers: 黑名单博主
 * bloggerEvaluations: 添加的博主评论
 * credit：用户信用值
 * registDate：用户注册时间
 * lastLoginDate: 最后登录时间
 * @type {Schema}
 */
var UserSchema = new Schema({
	id:  Number,
	name: String,
	pwd: String,
	heartBloggers: [Number],
	recommendBloggers: [Number],
	blackListBloggers: [Number],
	bloggerEvaluations: [Number],
	credit: { type: Number, default: 0},
	registDate: { type: Date, default: Date.now },
	lastLoginDate: Date
});
