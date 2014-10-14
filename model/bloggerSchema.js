var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * [BloggerSchema description]
 * id: 博主Id
 * name: 博主名称
 * website: 博主博客信息
 * social: 博主社交地址
 * tags: 博主标签
 * state: 博主状态{0：待通过 1：已通过} 
 * createDate: 博主创建时间
 * @type {Schema}
 */
var BloggerSchema = new Schema({
    id: Number,
    name: String,
    website: { url: String, imgSrc: String },
    social: { twitter: String, weibo: String },
    tags: [String],
    state: Number,
    createDate: { type: Date, default: Date.now }
})；