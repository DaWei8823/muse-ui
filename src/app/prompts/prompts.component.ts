import { Component, OnInit } from '@angular/core';
import { PromptOverview } from '../models';
import { ColDef, GridApi, GridReadyEvent, ColumnApi, ICellRendererParams } from 'ag-grid-community'
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent implements OnInit {



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
    this.gridApi.sizeColumnsToFit()
  }

  ngOnInit(): void {
    this.prompts = [
      { id : 1, title : "Lion king in different ecosystem", createdBy: "DaWei888", submissions : 4, tags : "asdf, asdf, asdf, asdf", dateAdded: new Date() }
    ]
  }

  viewPromptCellRenderer = function (params:ICellRendererParams){
    let a = document.createElement("a")
    a.href = `/view/${params.value}`
    let img = document.createElement("img")
    img.classList.add("nav-icon")
    img.src = "favicon.ico"
    img.height = 17
    img.style.marginLeft = "10px"
    img.style.marginRight = "auto"
    a.appendChild(img)
    return a
  }

  colDefs:ColDef[] = 
  [
    { headerName: '', field: 'id', cellRenderer: this.viewPromptCellRenderer, width: 100 },
    { headerName: 'Title', field: 'title', width: 550},
    { headerName: 'Created By', field: "createdBy", filter:true },
    { headerName: "Date", field: "dateAdded", valueFormatter: param => param.value.toLocaleDateString() },
    { headerName: 'Submissions', field: 'submissions'},
    { headerName: 'Tags', field: 'tags', width:400 }
  ]


  
  // <img class="nav-icon" src="favicon.ico" alt="" height="35px">
}
