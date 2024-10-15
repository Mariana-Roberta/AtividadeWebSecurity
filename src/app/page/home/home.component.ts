import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Button} from "primeng/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router) {
  }

  login(){
    this.router.navigate(['/login']);
  }

  adm(){
    this.router.navigate(['/admin']);
  }

  gerente(){
    this.router.navigate(['/gerente']);
  }
}
