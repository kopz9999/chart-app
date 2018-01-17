import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartFormComponent} from "../chart-form/chart-form.component";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  @ViewChild('currentForm') currentForm: ChartFormComponent;
  @ViewChild('desiredForm') desiredForm: ChartFormComponent;

  constructor() { }

  ngOnInit() {
    this.currentForm.formGroup.valueChanges.subscribe(() => this.updateChart());
    this.desiredForm.formGroup.valueChanges.subscribe(() => this.updateChart());
  }

  updateChart() {
    console.log(this.currentForm.formGroup.value, this.desiredForm.formGroup.value);
  }
}
