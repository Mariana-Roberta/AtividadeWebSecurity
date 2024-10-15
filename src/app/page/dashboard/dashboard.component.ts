import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import {Button} from "primeng/button";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Button,
    DividerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private _router: Router, private _service: AuthServiceService) {
  }

  user(){
    this._router.navigate(['/user']);
  }

  adm() {
    this._router.navigate(['/admin']);
  }

  gerente() {
    this._router.navigate(['/gerente']);
  }

  profile(){
    this._router.navigate(['/profile']);
  }

  logout(){
    this._service.logout();
  }
}
