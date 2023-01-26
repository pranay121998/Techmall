const express=require('express')
const router=express.Router()
const categoryModal=require("../modal/CategoryModal")
/* router.get("/login",(request,response)=>{
   var email=request.query.email;
   var pwd=request.query.password;
   console.log(request)
   if(email=='pranaybansod@gmail.com'  && pwd=='12345')
       response.send({status:true})
  else
  response.send({status:false})
}) */

 router.post("/login",(request,response)=>{
   var email=request.body.email;
   var pwd=request.body.password;
 //  console.log(email,"   ",pwd);
   if(email=='pranaybansod@gmail.com'  && pwd=='12345')
	 {
		 request.session.user={
			 type:"admin",
			 email:email
		 }
       response.send({status:true})
	 }
  else
  response.send({status:false})
})
 
  router.all("/category",(request,response)=>{
	  console.log('req   ',request.body,"res      ",response.body);
      if(request.method=='GET')
	  {   
		  
            categoryModal.listCategory((result)=>{
		   // console.log("Resultn   ",result)
		    console.log("resul dsjd   ",response.send);
  		response.send({list:result})
	    })
	  }
	  else
          {
           // console.log('inside router  save ',request.body)
            categoryModal.saveCategory(request.body,(result)=>{
               response.send({status:result});
		    console.log("REsuly  ;;",result);
	    })		  
	  }
  });
module.exports=router
