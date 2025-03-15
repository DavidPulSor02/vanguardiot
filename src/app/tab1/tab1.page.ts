import { Component } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { NotificationListComponent } from '../notification-list/notification-list.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  notifications = [
    { message: 'Nueva actualización disponible' },
    { message: 'Temperatura alta en Máquinas' },
    { message: 'Nuevo dispositivo conectado' }
  ];

  constructor(
    private popoverCtrl: PopoverController,
    private navCtrl: NavController
  ) { }

  async openNotifications(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: NotificationListComponent,
      event: event,
      translucent: true,
      componentProps: { notifications: this.notifications }
    });

    await popover.present();
  }

  navigateTo(page: string) {
    if (page === 'machines') {
      this.navCtrl.navigateForward('/machines');
    } else if (page === 'devices') {
      this.navCtrl.navigateForward('/devices');
    }
  }
}
