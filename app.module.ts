import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// By default, the app generated by ng init will include the FormsModule, here we’re requiring the ReactiveFormsModule as well
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Include the components we created
import { InteretPro } from './form/form.interet-pro';
import { InteretEtudiant } from './form/form.interet-etu';
import { InfoCompPro } from './form/form.info-comp-pro';
import { InfoCompEtudiantComponent } from './form/form.info-comp-etu';
import { FormValidationComponent } from './form/form.formvalidations';

@NgModule({
  declarations: [
    AppComponent,

    // Declare the three components as part of the root NgModule
    InteretPro,
    InteretEtudiant,
    InfoCompPro,
    InfoCompEtudiantComponent,
    FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
