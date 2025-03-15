import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  filterType = 'Eventos';
  selectedDate: string = 'Fecha';

  activities = [
    { date: 'Hoy', events: [] },
    { date: 'Ayer', events: [] },
    { date: 'mié, 12 mar', events: [] },
    { date: 'mar, 11 mar', events: [] },
    { date: 'lun, 10 mar', events: [] }
  ];
}
