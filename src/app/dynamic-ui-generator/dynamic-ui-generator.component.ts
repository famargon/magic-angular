import { Component, OnInit } from '@angular/core';
import { UIProviderService } from '../services/ui-provider.service';

@Component({
  selector: 'app-dynamic-ui-generator',
  templateUrl: './dynamic-ui-generator.component.html',
  styleUrls: ['./dynamic-ui-generator.component.css'],
  providers: [UIProviderService]
})
export class DynamicUiGeneratorComponent implements OnInit {

  application : any;

  view : any;


  constructor(private uiProvider : UIProviderService) { 
    uiProvider.onUIChanges(newui => this.view = newui);
  }

  ngOnInit() {
    this.application = this.uiProvider.getApplication();

    let homeView : String = this.application.bootstrap;

    this.uiProvider.loadView(homeView);
  }

}
