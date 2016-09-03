import {NgModule} from '@angular/core';
import {BrowserModule} from  '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {appRouterProviders, routing} from './app.routes';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [
        AppComponent, 
        NavbarComponent, 
        JumbotronComponent,
        HomeComponent,
        AboutComponent
        ],
    providers: [appRouterProviders],
    bootstrap: [AppComponent]

})
export class AppModule{}