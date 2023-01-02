import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingConstants } from './shared/constants/routing-constants';
import { HelperComponent } from './helper/helper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: RoutingConstants.HOME,
    component: HomeComponent,
  },
  {
    path: RoutingConstants.CUSTOMER,
    loadChildren: () => import('./customer').then((module) => module.CustomerModule)
  },
  {
    path: RoutingConstants.HELPER,
    component: HelperComponent
  },
  {
    path: RoutingConstants.PROVIDER,
    loadChildren: () => import('./provider').then((module) => module.ProviderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
