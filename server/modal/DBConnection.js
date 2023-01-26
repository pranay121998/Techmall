var Datastore=require("nedb");
var category=new Datastore({filename:'category.db',autoload:true});
//mongoClient.loadDatabase();
//const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://techmall_ang:@123@123@cluster0.e7jeq.mongodb.net/techmall_ang?retryWrites=true&w=majority";
/*const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

//const url="mongodb://localhost:27017";

/*function getConnection(callback)
  {
   Datastore({useUnifiedTopology:true,useNewUrlParser:true},(err,client)=>{
	if(err)
	   {
	   console.log(err);
	   callback(false);
	   }
	   else
	   {
		var db= new client.db({filename:'techmall_ang.db',autoload:true});
		   console.log("DB.Cate  ",db);
		
		callback(db);
	   }
    })   
}*/
module.exports=category;
