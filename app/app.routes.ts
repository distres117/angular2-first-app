import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';

const routes : Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent}
];
export const appRouterProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);