import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {path: 'linea', component: LineaComponent },
  {path: 'barra', component: BarraComponent},
  {path: 'donas', component: DonasComponent},
  {path: 'radar', component: RadarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'linea'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
