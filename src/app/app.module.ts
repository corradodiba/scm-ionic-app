import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardPageModule } from './pages/dashboard/dashboard.module';
import { CoursesModule } from './pages/courses/courses.module';
import { UsersModule } from './pages/users/users.module';
import { MenuButtonModule } from './components/menu-button/menu-button.module';

import { MenuComponent } from './components/menu/menu.component';

import { AuthInterceptor } from './pages/auth-interceptor';
import { HomePageModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    DashboardPageModule,
    CoursesModule,
    UsersModule,
    MenuButtonModule,
    HomePageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
