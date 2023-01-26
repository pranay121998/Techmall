import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ADMIN_CATEGORY  } from '../serverUrls';
@Component({
  selector: 'app-admincategory',
  templateUrl: './admincategory.component.html',
  styleUrls: ['./admincategory.component.css']
})
export class AdmincategoryComponent implements OnInit {

   public catelist=[];
   public msg='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.loadCategory();
  }
  public loadCategory()
    {
	this.http.get(ADMIN_CATEGORY).subscribe((response:any)=>
		{
			console.log("Cate::",response);
			this.catelist=response;

		})	

    }

   public save(title:string)
   {console.log("tile2  ;;",title);
     this.http.post(ADMIN_CATEGORY,{title:title}).subscribe((response:any)=>{
        if(response.status){
		console.log('pst   ',response,"title   ;",title);
		this.msg='Category Saved !';
		this.loadCategory();
	}
	else
		this.msg='Category not saved!';

     })
   }

}
