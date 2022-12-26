var express=require('express');
var mongooose=require('mongoose');
const router = require('./src/routes/api');

var app=new express();

//sucrity middleware difie..
var limit=require('express-rate-limit');
var bodyParser=require('body-parser');
var sanitize=require('express-mongo-sanitize')  
var hpp=require('hpp')  
var cors=require('cors')  
var xss=require('xss-clean')  
var helmet=require('helmet');  
// const { use } = require('./src/routes/api');
//sucrity middleware use...
app.use(hpp())
app.use(cors())
app.use(sanitize())
app.use(xss())
app.use(bodyParser.json())
app.use(helmet())
const limiter = limit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	
})

// mongooose use----
let url ='mongodb://127.0.0.1:27017/student';
let options ={user:'',pass:''};

mongooose.connect(url,options,(error)=>{
	console.log("connect success");
	console.log(error);
})

app.use(limiter)
//undifine route
app.use("/api/v1",router);
app.use("*",(req,res)=>{
    res.status(404).json({"status":"fail","data":"undifine"});
})

module.exports=app;