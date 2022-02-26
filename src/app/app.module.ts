import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule  } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialRadioControlComponent } from './components/material-radio-control/material-radio-control.component';
import { MaterialCardControlComponent } from './components/material-card-control/material-card-control.component';
import { MaterialButtonsComponent } from './components/material-buttons/material-buttons.component';
import { StepperWizardComponent } from './components/stepper-wizard/stepper-wizard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperTemplateComponent } from './components/stepper-wizard/stepper-template/stepper-template.component';
import { MaterialFormControlComponent } from './components/material-form-control/material-form-control.component';
import { UniqueListComponent } from './components/unique-list/unique-list.component';
import { InnoWcagInputComponent } from './components/inno-wcag-input/inno-wcag-input.component';
import { Other1Component } from './components/other1/other1.component';
import { HighlightService } from './services/highlight-service.service';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { TsHtmlScssTabbedViewerComponent } from './components/ts-html-scss-tabbed-viewer/ts-html-scss-tabbed-viewer.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    FooterComponent,
    MaterialRadioControlComponent,
    MaterialCardControlComponent,
    MaterialButtonsComponent,
    StepperWizardComponent,
    StepperTemplateComponent,
    MaterialFormControlComponent,
    UniqueListComponent,
    InnoWcagInputComponent,
    Other1Component,
    CodeViewerComponent,
    TsHtmlScssTabbedViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatTabsModule,
    MatMenuModule,
    HighlightModule,
    HighlightPlusModule
  ],
  providers: [
    HighlightService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
