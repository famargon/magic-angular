import { Component, OnInit, Input } from '@angular/core';
import { UIProviderService } from '../services/ui-provider.service';

@Component({
  selector: 'app-dynamic-ui-component',
  templateUrl: './dynamic-ui-component.component.html',
  styleUrls: ['./dynamic-ui-component.component.css']
})
export class DynamicUiComponentComponent implements OnInit {

  @Input() component : any;
  @Input() data : any;

  constructor(private ui : UIProviderService) { }

  ngOnInit() {
  }

  callLink(link : String) {
    this.ui.followLink(link);
  }
}
