import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  list=[
    {name:'1번cctv',url:'naver.com'},
    {name:'2번cctv',url:'daum.com'},
  ]
  editable = true
  constructor() { }

  ngOnInit(): void {
  }
  
}
