import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Result } from './../../models/youtube.interface';
import { YoutubeService } from './../../services/youtube.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  form!: FormGroup;
  loading:boolean = false;
  @Output() results: EventEmitter<Result[]> = new EventEmitter<Result[]>()

  constructor(
    private fb: FormBuilder,
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      search:['',Validators.required]
    })
  }
  searchVideo(){
    this.loading = true;
    let value = this.form.controls['search'].value
    if(this.form.valid){
      this.youtubeService.search(value).subscribe((results:Result[]) =>{        
        this.loading= false;
        this.results.emit(results)
      }), (err: any) => {
        alert("Erro!!")
        this.loading= false;
      },
      () => { 
        this.loading= false;
      }
    }
  }
}
