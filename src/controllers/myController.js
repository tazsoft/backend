exports.get=(req,res)=>{
    
res.status(200).json({"status":"ok","Data":"This is get"});
}
exports.post=(req,res)=>{
    
res.status(201).json({"status":"ok","Data":"This is post"});
}