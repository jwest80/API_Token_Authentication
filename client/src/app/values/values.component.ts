import { Component, OnInit } from '@angular/core';

import { ValuesService } from './values.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: string[];
  constructor(private valuesService: ValuesService) {
  }

  getValues(): void {
    this.valuesService.getValues().subscribe(
      vals => {
        this.values = vals;
      },
      err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.getValues();
  }

}
