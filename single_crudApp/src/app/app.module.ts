import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RetrieveComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
