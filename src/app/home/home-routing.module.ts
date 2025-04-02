import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddPillComponent } from './components/add-pill/add-pill.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'homePage',
        pathMatch: 'full',
      },
      {
        path:'homePage',component:HomePageComponent
      },
      {path:'addPill',component:AddPillComponent},
      {path:'profile',component:ProfileComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
