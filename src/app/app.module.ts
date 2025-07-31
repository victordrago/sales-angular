import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  imports: [
    AppComponent,
    HeaderComponent,
  ],
})
export class AppModule {}