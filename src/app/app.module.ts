import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppServiceService } from './app-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule  } from  '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
