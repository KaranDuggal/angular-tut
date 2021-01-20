import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  APIdata : any;
  @Input() accessAs
  constructor(
    private user:UserService
  ) {
    this.getdata()
  }
  @Output() parentComponent:EventEmitter<any> = new EventEmitter
  ngOnInit(): void {
    console.log(this.accessAs);
    // this.parentComponent.emit(this.data)
  }
  senddata(){
    this.parentComponent.emit(this.data)
  }
  data = [
    {
      name: "user karan",
      age: 21
    },
    {
      name: "user karan",
      age: 22
    },
    {
      name: "user ubuntu",
      age: 23
    },
    {
      name: "user linux",
      age: 24
    },
  ]
//  let =[];
  getdata(){
    this.user.getData().subscribe(data =>{
      console.log(data);

      this.APIdata = data
    })
  }
}
