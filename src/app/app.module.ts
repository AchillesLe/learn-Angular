import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { RegisterComponent } from './register/register.component';
import { DrawlogoComponent } from './drawlogo/drawlogo.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    RegisterComponent,
    DrawlogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiUrfzmjW0LJ354Xd26AFA1c1DZTIyKo4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
