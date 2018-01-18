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
    legend: {
      position: 'right'
    },
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

  colors = [
    {
      borderColor: '#5bb7ef',
      backgroundColor: 'rgba(0,0,0,0)',
      pointBorderColor: 'rgba(0,0,0,0)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
    },
    {
      borderColor: 'rgba(0,0,0,0)',
      backgroundColor: '#ffd451',
      pointBorderColor: 'rgba(0,0,0,0)',
      pointBackgroundColor: 'rgba(0,0,0,0)',
    },
  ];

  constructor() { }

  ngOnInit() {
    this.currentForm.formGroup.valueChanges.subscribe(() => this.updateChart());
    this.desiredForm.formGroup.valueChanges.subscribe(() => this.updateChart());
    this.updateChart();
  }

  updateChart() {
    this.chartData = [
      { data: Object.values(this.desiredForm.formGroup.value), label: 'Desired' },
      { data: Object.values(this.currentForm.formGroup.value), label: 'Current' },
    ];
  }
}
