import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../models/youtube.interface';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {
  @Input() result!: Result
  @Input() type!: string
  constructor() { }

  ngOnInit(): void {
  }

}
