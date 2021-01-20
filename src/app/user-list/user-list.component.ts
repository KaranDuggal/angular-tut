import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // @Input() hero
  @Output() parentcomp:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.parentcomp.emit("hello child")
  }

}
