import { Component } from '@angular/core';

interface Event {
  description: string;
}

interface Activity {
  date: string;
  events: Event[];
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  activities: Activity[] = [
    {
      date: '2024-03-15',
      events: [
        { description: 'Encendido de dispositivo' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' }
      ]
    },
    {
      date: '2024-03-14',
      events: [
        { description: 'Encendido de dispositivo' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' }
      ]
    },
    {
      date: '2024-03-13',
      events: [
        { description: 'Encendido de dispositivo' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' },
        { description: 'Temperatura alta detectada' }
      ]
    }
  ];
  filterType: any;
  selectedDate: any;
}
