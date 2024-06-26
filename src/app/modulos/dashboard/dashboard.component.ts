import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  nombres:any;
  apellidos:any;

  ngOnInit(): void {
    this.nombres = sessionStorage.getItem('nombres');
    this.apellidos = sessionStorage.getItem('apellidos');
  }
}
