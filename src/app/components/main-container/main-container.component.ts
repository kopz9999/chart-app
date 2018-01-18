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
  chartOptions = {
    responsive: true,
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        beginAtZero: true,
        max: 5,
        min: 0,
        stepSize: 1,
        labels: false,
        showLabelBackdrop: false,
        userCallback: function (value, index, values) {
          return '';
        }
      }
    }
  };

  chartData = [
  ];

  chartLabels = [
    'Ideation',
    'Art Direction',
    'Design',
    'Technical Conception',
    'Strategy',
    'Planning',
    'Editorial',
    'Copywriting',
  ];

  constructor() { }

  ngOnInit() {
    this.currentForm.formGroup.valueChanges.subscribe(() => this.updateChart());
    this.desiredForm.formGroup.valueChanges.subscribe(() => this.updateChart());
    this.updateChart();
  }

  updateChart() {
    this.chartData = [
      { data: Object.values(this.currentForm.formGroup.value), label: 'Current' },
      { data: Object.values(this.desiredForm.formGroup.value), label: 'Desired' },
    ];
  }
}
