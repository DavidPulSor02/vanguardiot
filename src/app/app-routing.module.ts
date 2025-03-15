import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'modal',
    loadChildren: () => import('./calendar-modal/calendar-modal.module').then(m => m.CalendarModalModule)
  },
  {
    path: 'machines',
    loadChildren: () => import('./pages/machines/machines.module').then( m => m.MachinesPageModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./pages/devices/devices.module').then( m => m.DevicesPageModule)
  },
  {
    path: 'maquinas',
    loadChildren: () => import('./pages/maquinas/maquinas.module').then( m => m.MaquinasPageModule)
  },
  {
    path: 'oficina',
    loadChildren: () => import('./pages/oficina/oficina.module').then( m => m.OficinaPageModule)
  },
  {
    path: 'bodega',
    loadChildren: () => import('./pages/bodega/bodega.module').then( m => m.BodegaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
