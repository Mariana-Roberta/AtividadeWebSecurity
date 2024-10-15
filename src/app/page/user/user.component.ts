import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
