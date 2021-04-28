import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppContainerComponent} from './app.container';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardContainerComponent} from './dashboard/dashboard.container';
import {HeroDetailPresentationComponent} from './hero-detail/hero-detail.presentation.component';
import {HeroDetailContainerComponent,} from './hero-detail/hero-detail.smart.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {HeroesPresentationComponent} from './heroes/heroes.presentation.component';
import {HeroesContainerComponent} from './heroes/heroes.container';
import {InMemoryDataService} from './in-memory-data.service';
import {MessagesComponent} from './messages/messages.component';
import {MessagesContainerComponent} from './messages/messages.container';
import {HeroSearchContainerComponent} from './hero-search/hero-search.container';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        AppContainerComponent,
        DashboardComponent,
        DashboardContainerComponent,
        HeroesPresentationComponent,
        HeroesContainerComponent,
        HeroDetailPresentationComponent,
        HeroDetailContainerComponent,
        MessagesComponent,
        MessagesContainerComponent,
        HeroSearchComponent,
        HeroSearchContainerComponent,
    ],
    bootstrap: [AppContainerComponent],
})
export class AppModule {}
