import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name: string | undefined='';
  email: string | undefined='';

  constructor(private router: Router) { }

  submitForm() {
    // Store the entered details in local storage or send them to an API
    localStorage.setItem('name', this.name!);
    localStorage.setItem('email', this.email!);
    

    // Navigate to the child page
    this.router.navigate(['/child']);
  }
}
