import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { Component } from '@angular/core';
import { BlogImg1PageComponent } from './blog-img1-page/blog-img1-page.component';
import { BlogImg2PageComponent } from './blog-img2-page/blog-img2-page.component';
import { BlogImg3PageComponent } from './blog-img3-page/blog-img3-page.component';
import { BlogImg4PageComponent } from './blog-img4-page/blog-img4-page.component';
import { BlogImg5PageComponent } from './blog-img5-page/blog-img5-page.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'blog',component:BlogComponent},
    {path:'blog_img1',component:BlogImg1PageComponent},
    {path:'blog_img2',component:BlogImg2PageComponent},
    {path:'blog_img3',component:BlogImg3PageComponent},
    {path:'blog_img4',component:BlogImg4PageComponent},
    {path:'blog_img5',component:BlogImg5PageComponent},
    {path: '', redirectTo: 'home',pathMatch: 'full'},
    {path: '**',component:PageNotFoundComponent}
];
