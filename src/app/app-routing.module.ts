import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './authentication/auth.guard';
import { DailyLogModule } from './daily-log/daily-log.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'dailyTable',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./daily-table/daily-table.module').then(
        (m) => m.DailyTableModule
      ),
  },
  {
    path: 'dailyLog',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./daily-log/daily-log.module').then((m) => m.DailyLogModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact me',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Home page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
