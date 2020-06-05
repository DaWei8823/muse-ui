import { Component, OnInit } from '@angular/core';
import { PromptOverview } from './models';
import { ColDef } from 'ag-grid-community'


@Component({
  selector: 'prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent implements OnInit {

  colDefs = 
  [
    { headerName: '#', field: 'id',},
    { headerName: 'Title', field: 'title'},
    { headerName: "Date", field: "dateAdded" },
    { headerName: 'Submissions', field: 'submissions'},
    { headerName: 'Tags', field: 'tags' }
  ]
  private prompts:[PromptOverview]

  constructor() { }


  

  ngOnInit(): void {
    this.prompts = [
      { id : 1, title : "adsfasdf", submissions : 4, tags : "asdf, asdf, asdf, asdf", dateAdded: new Date() }
    ]
  }

}
