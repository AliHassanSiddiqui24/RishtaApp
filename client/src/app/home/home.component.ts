import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.getUsers()
  }

  registerMode = false
  registerToggle(){
    this.registerMode = !this.registerMode
  }
  cancelRegisterMode(event: boolean){
    this.registerMode = event
  }
  users : any
  
 http = inject(HttpClient);
   getUsers(){
  this.http.get('https://localhost:5001/api/users').subscribe({
    next: res => this.users = res,
    error: err => console.log(err),
    complete: () => console.log('request has completed')
   })
 }
}
