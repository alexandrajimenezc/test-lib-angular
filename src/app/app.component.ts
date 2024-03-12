import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OButtonComponent, OrinocoComponent, Type } from 'angular-orinoco';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OrinocoComponent,OButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'orinoco-workspace';
   public type:Type=Type.PRIMARY;
}
