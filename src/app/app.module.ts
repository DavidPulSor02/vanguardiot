import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalendarModalModule } from './calendar-modal/calendar-modal.module';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent // Asegúrate de que el componente existe en notification-list
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    CalendarModalModule // Verifica que este módulo existe y está bien escrito
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Necesario para Ionic y componentes personalizados
})
export class AppModule { }
  