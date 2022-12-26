const mongooose=require('mongoose');

let DataSchema=mongooose.Schema({
    Name:String,
    Roll:String,
    Class:String,
    Remark:String
})

let stdModel=mongooose.model('lists',DataSchema);

module.exports=stdModel;