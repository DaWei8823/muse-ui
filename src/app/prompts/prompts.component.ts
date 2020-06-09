import { Component, OnInit } from '@angular/core';
import { PromptOverview } from '../models';
import { ColDef, GridApi, GridReadyEvent, ColumnApi } from 'ag-grid-community'

@Component({
  selector: 'prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent implements OnInit {

  colDefs:ColDef[] = 
  [
    { headerName: '#', field: 'id' },
    { headerName: 'Title', field: 'title'},
    { headerName: 'Created By', field: "createdBy", filter:true },
    { headerName: "Date", field: "dateAdded", valueFormatter: param => param.value.toLocaleDateString() },
    { headerName: 'Submissions', field: 'submissions'},
    { headerName: 'Tags', field: 'tags' }
  ]
  private prompts:PromptOverview[]
  private gridApi:GridApi
  private columnApi:ColumnApi
  private searchPhrase:string

  constructor() { }

  search(event:KeyboardEvent){
    console.log(this.searchPhrase)
    this.gridApi.setQuickFilter(this.searchPhrase)
  }

  onGridReady(params:GridReadyEvent){
    this.gridApi = params.api
    this.columnApi = params.columnApi
    this.columnApi.autoSizeAllColumns()
  }

  ngOnInit(): void {
    this.prompts = [
      { id : 1, title : "adsfasdf", createdBy: "DaWei888", submissions : 4, tags : "asdf, asdf, asdf, asdf", dateAdded: new Date() }
    ]
  }

}
