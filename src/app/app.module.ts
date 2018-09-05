import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form/dynamic-form-question.component';
import { DynamicUiComponentComponent } from './dynamic-ui-component/dynamic-ui-component.component';
import { DynamicUiGeneratorComponent } from './dynamic-ui-generator/dynamic-ui-generator.component';




@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicUiComponentComponent,
    DynamicUiGeneratorComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
