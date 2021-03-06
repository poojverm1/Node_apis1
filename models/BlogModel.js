//importing mongoose module
const mongoose = require('mongoose')

//import schema
const Schema = mongoose.Schema;

let blogSchema = new Schema(
    {
blogId:{
    type:String,
    default:''
},
title:{
    type:String,
    default:''
},
description:{
    type:String,
    default:''
},
bodyHtml:{
    type:String,
    default:''
},
views:{
    type:Number,
    default:0
},
isPublished:{
    type:Boolean,
    default:false
},
author:{
    type:String,
    default:''
},
tags:[],
created:{
    type:Date,
    default:Date.now
},
}
)
mongoose.model('Blog',blogSchema)
