import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './layouts/public/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard-module';

@NgModule({
  imports: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    DashboardModule
  ],
})
export class AppModule {}
