const stumodel=require('../models/stuList');

exports.InsertData=(req,res)=>{
  let reqbody = req.body;
  stumodel.create(reqbody,(err,data)=>{
    if(err){
        res.status(404).json({"status":"fail","Data":err});
    }else{
        res.status(200).json({"status":"ok","Data":data});

    }
  })
   
}

// read
exports.sturead=(req,res)=>{
  let quary={};
  let projectio='Roll Remark';
  stumodel.find(quary,projectio,(err,data)=>{
    if(err){
      res.status(404).json({"status":"fail","Data":err});
  }else{
      res.status(200).json({"status":"success","Data":data});

  }
  })
}
// Update
exports.stuUpdate=(req,res)=>{
  let id=req.params.id
  let quary={ _id:id }
   let Updatedata=req.body
   stumodel.updateOne(quary,Updatedata,(err,data)=>{
    if(err){
      res.status(404).json({"status":"fail","Data":err});
  }else{
      res.status(200).json({"status":"success","Data":data});

  }
   })
}

//delete

exports.delete=(req,res)=>{
  let id = req.params.id
  let quary={_id:id}

  stumodel.remove(quary,(err,data)=>{
    if(err){
      res.status(404).json({"status":"fail","Data":err});
  }else{
      res.status(200).json({"status":"success","Data":data});

  }
  })
}