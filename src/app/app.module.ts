import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './pages/courses/courses.module';
import { UsersModule } from './pages/users/users.module';
import { MenuButtonModule } from './components/menu-button/menu-button.module';

import { MenuComponent } from './components/menu/menu.component';

import { AuthInterceptor } from './pages/auth-interceptor';
import { HomePageModule } from './pages/home/home.module';
import { environment } from 'src/environments/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SlidesPageModule } from './pages/slides/slides.module';
const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    CoursesModule,
    UsersModule,
    MenuButtonModule,
    HomePageModule,
    SlidesPageModule,
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
