import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CamionetasComponent } from './pages/camionetas/camionetas.component';
import { SedanesComponent } from './pages/sedanes/sedanes.component';
import { DeportivosComponent } from './pages/deportivos/deportivos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component'; // ¡Importa EmpleadosComponent!

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camionetas', component: CamionetasComponent },
  { path: 'sedanes', component: SedanesComponent },
  { path: 'deportivos', component: DeportivosComponent },
  { path: 'empleados', component: EmpleadosComponent }, 
  { path: '**', redirectTo: '' }
];