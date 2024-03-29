import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialRadioControlComponent } from './components/material-radio-control/material-radio-control.component';
import { MaterialCardControlComponent } from './components/material-card-control/material-card-control.component';
import { MaterialButtonsComponent } from './components/material-buttons/material-buttons.component';
import { StepperWizardComponent } from './components/stepper-wizard/stepper-wizard.component';
import { MaterialFormControlComponent } from './components/material-form-control/material-form-control.component';
import { UniqueListComponent } from './components/unique-list/unique-list.component';
import { Other1Component } from './components/other1/other1.component';


const routes: Routes = [
  {path: 'radio', component: MaterialRadioControlComponent},
  {path: 'card', component: MaterialCardControlComponent},
  {path: 'buttons', component: MaterialButtonsComponent},
  {path: 'wizard', component: StepperWizardComponent},
  {path: 'forms', component: MaterialFormControlComponent},
  {path: 'lists', component: UniqueListComponent},
  {path: 'other1', component: Other1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
