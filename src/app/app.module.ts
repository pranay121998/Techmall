import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdmincategoryComponent } from './admincategory/admincategory.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminloginComponent,
    UserloginComponent,
    HomeComponent,
    AdminproductComponent,
    AdminhomeComponent,
    AdmincategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

