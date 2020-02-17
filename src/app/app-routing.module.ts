import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard],
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
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        m => m.DashboardPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./pages/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'add-user',
    loadChildren: () =>
      import('./pages/modals/add-user/add-user.module').then(
        m => m.AddUserPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'update-user',
    loadChildren: () =>
      import('./pages/modals/update-user/update-user.module').then(
        m => m.UpdateUserPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'update-course',
    loadChildren: () =>
      import('./pages/modals/update-course/update-course.module').then(
        m => m.UpdateCoursePageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'add-course',
    loadChildren: () =>
      import('./pages/modals/add-course/add-course.module').then(
        m => m.AddCoursePageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'update-course',
    loadChildren: () =>
      import('./pages/modals/update-course/update-course.module').then(
        m => m.UpdateCoursePageModule,
      ),
  },
  {
    path: 'add-subject',
    loadChildren: () =>
      import('./pages/modals/add-subject/add-subject.module').then(
        m => m.AddSubjectPageModule,
      ),
  },
  {
    path: 'update-subject',
    loadChildren: () =>
      import('./pages/modals/update-subject/update-subject.module').then(
        m => m.UpdateSubjectPageModule,
      ),
  },
  {
    path: 'grades',
    loadChildren: () => import('./pages/grades/grades.module').then( m => m.GradesPageModule)
  },
  {
    path: 'add-grade',
    loadChildren: () => import('./pages/modals/add-grade/add-grade.module').then( m => m.AddGradePageModule)
  },
  {
    path: 'update-grade',
    loadChildren: () => import('./pages/modals/update-grade/update-grade.module').then( m => m.UpdateGradePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
