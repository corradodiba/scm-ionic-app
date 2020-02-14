import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then(m => m.CoursesModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(m => m.SignupPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        m => m.DashboardPageModule,
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'add-user',
    loadChildren: () =>
      import('./pages/modals/add-course/add-course.module').then(
        m => m.AddCoursePageModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
