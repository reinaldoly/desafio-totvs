import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filterService: FilterService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      filter: [null, Validators.required]
    });
  }

  filtar(): void {
    const ano = this.form.controls.filter.value;
    if (ano == null) {
      return;
    }

    this.filterService.sendFilter(ano);
  }
}
