
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { AuthenticatedUserGuard } from './shared/guards/authenticated-user.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'user', redirectTo: 'user/panel', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user' ,canActivate:[AuthenticatedUserGuard],
    children: [
      {path: 'panel', component: UserPanelComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
