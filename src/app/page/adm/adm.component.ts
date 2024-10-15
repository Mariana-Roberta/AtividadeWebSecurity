import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-adm',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {

}
