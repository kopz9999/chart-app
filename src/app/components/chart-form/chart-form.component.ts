import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.scss']
})
export class ChartFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.setupForm();
  }

  ngOnInit() {
  }

  private setupForm() {
    this.formGroup = this.formBuilder.group({
      ideation: [2, Validators.required ],
      artDirection: [2, Validators.required ],
      design: [2, Validators.required ],
      technicalConception: [2, Validators.required ],
      strategy: [2, Validators.required ],
      planning: [2, Validators.required ],
      editorial: [2, Validators.required ],
      copywriting: [2, Validators.required ],
    });
  }
}
