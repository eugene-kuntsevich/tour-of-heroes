import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardContainerComponent} from './dashboard/dashboard.container';

import {HeroesContainerComponent} from './heroes/heroes.container';
import {HeroDetailContainerComponent} from './hero-detail/hero-detail.smart.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardContainerComponent},
    {path: 'detail/:id', component: HeroDetailContainerComponent},
    {path: 'heroes', component: HeroesContainerComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
