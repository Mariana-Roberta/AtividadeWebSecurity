import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-gerente',
  standalone: true,
    imports: [
        CardModule
    ],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.css'
})
export class GerenteComponent {

}
