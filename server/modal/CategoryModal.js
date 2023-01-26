var category =require('./DBConnection');
  var Category=function()
   {
     this.saveCategory=(data,callback)=>
	{ console.log("category 2",data);
	//	mongo(category=>{console.log("db ",category);
		
			if(category)
			{  console.log("category modal   ",category);
			  category.insert(data,(err)=>{
	   if(err)
	   callback(false)
	  else
	   callback(true);
	  })
			}else{
			 callback(false);
			}	
		
	//	})
     }	
		this.listCategory=(callback)=>
	        {
	//	   mongo(category=>{
			if(category)
			   {  console.log("category 3", category);
			    category.find({},(err,result)=>{
		   if(err){
			console.log(err)
			callback([])
		   }
	           else{
			   console.log("result  few",result);
		      callback(result)
			}	
		})
			   }else{				callback([]);
			   }
	//	   })
		}
  }
module.exports=new Category();
