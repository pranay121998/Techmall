const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
//const cookieParser=require('cookie-parser')
const fileUpload=require('express-fileupload')
const expressSession=require('express-session')

const server=express();
const adminRouter=require("./server/router/adminRouter")

server.use(express.static(path.join(__dirname,"dist/Techmallone")))
server.use(express.urlencoded())
//server.use(bodyParser.json())
server.use(express.json())
//server.use(cookieParser())
server.use(fileUpload())
server.use(expressSession({secret:"pranay"}))
server.use("/admin",adminRouter)

server.get("/checksession",(request,response)=>{
  if(request.session.user==undefined)
	response.send({status:false});
  else
	response.send({status:true,type:request.session.user.type});

})
   
  server.get("/logout",(request,response)=>{
         request.session.destroy()
	  response.send({status:true})
  })

server.listen(8000,()=>{
  console.log("server: http://localhost:8000");
})
