import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialRadioControlComponent } from './components/material-radio-control/material-radio-control.component';
import { MaterialCardControlComponent } from './components/material-card-control/material-card-control.component';
import { MaterialButtonsComponent } from './components/material-buttons/material-buttons.component';


const routes: Routes = [
  {path: 'radio', component: MaterialRadioControlComponent},
  {path: 'card', component: MaterialCardControlComponent},
  {path: 'buttons', component: MaterialButtonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
