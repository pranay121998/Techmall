import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { CHECK_SESSION,LOGOUT  } from '../serverUrls';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public islogin=false;
    public usertype="";

  constructor(private http:HttpClient,private router:Router) { }

   public logout(){
      this.http.get(LOGOUT).subscribe((response:any)=>{
	  this.islogin=false;
	  this.usertype="";
	 this.router.navigateByUrl("/");

})
   }
/* public check(){
     this.http.get(CHECK_SESSION).subscribe((response:any)=>{
   
   this.islogin=response.status;
	if(this.islogin)
		this.usertype=response.type;      
})
}*/

  ngOnInit(): void {
setInterval(()=>{
console.log("constructer",this.http,"  check",CHECK_SESSION)
this.http.get(CHECK_SESSION).subscribe((response:any)=>{                   
  this.islogin=response.status; 
  console.log("value=",this.islogin,"  response=",response.status,"  check session=",CHECK_SESSION)                             
    if(this.islogin)                                             
            this.usertype=response.type;
 })},1000);
//	setInterval(this.check,1000);

}
}
