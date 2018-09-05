import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup, FormControl, Validators }                 from '@angular/forms';

import { QuestionBase }              from './model/question-base';
import { UIProviderService } from '../../services/ui-provider.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: []
})
export class DynamicFormComponent implements OnInit {

  @Input() component: any;
  form: FormGroup;
  payLoad = '';

  constructor(private ui : UIProviderService) {  }

  ngOnInit() {
    let group: any = {};

    this.component.fields.forEach(question => {
      group[question.model] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    this.form = new FormGroup(group);
  }

  onSubmit() {
    if(this.component.submitLink) {
      this.ui.followLink(this.component.submitLink, this.form.value);
    }
  }

  onCancel() {
    if(this.component.submitLink) {
      this.ui.followLink(this.component.submitLink);
    }
  }
}