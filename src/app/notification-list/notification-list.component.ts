import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  standalone: false,
})
export class NotificationListComponent {
closePopover() {
throw new Error('Method not implemented.');
}
  @Input() notifications: { message: string }[] = [];
}
