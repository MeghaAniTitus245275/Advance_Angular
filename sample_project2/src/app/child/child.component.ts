import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;

  constructor() { }

  ngOnInit() {
    // Retrieve the stored details from local storage
    this.name = localStorage.getItem('name')!;
    this.email = localStorage.getItem('email')!;
  }
  
}
