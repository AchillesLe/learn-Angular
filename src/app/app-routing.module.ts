import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { WeatherComponent } from './weather/weather.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { DrawlogoComponent } from './drawlogo/drawlogo.component';

const routes: Routes = [
  {
    path :'users' , component: UsersComponent
  },
  {
    path:'details/:id',component:DetailsComponent
  },
  {
    path:'posts',component:PostsComponent
  },
  {
    path:'weather',component:WeatherComponent
  },
  {
    path:'map',component:MapComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'drawlogo',
    component:DrawlogoComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
                                  SidebarComponent,
                                  UsersComponent,
                                  DetailsComponent,
                                  PostsComponent,
                                  WeatherComponent,
                                  MapComponent,
                                  HomeComponent,
                                  LoginComponent,
                                  AdminComponent,
                                  NotfoundComponent,
                                  RegisterComponent,
                                  DrawlogoComponent
                                ]

