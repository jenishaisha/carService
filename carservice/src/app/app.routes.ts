import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'blog',component:BlogComponent},
    {path: '', redirectTo: 'home',pathMatch: 'full'},
    {path: '**',component:PageNotFoundComponent}
];
