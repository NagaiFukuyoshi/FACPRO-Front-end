import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  rol: any;

  ngOnInit():void{
    this.rol = sessionStorage.getItem("rol");
  }

}

document.addEventListener('DOMContentLoaded', () => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle') as HTMLElement;

  if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener('click', (event: Event) => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled').toString());
      });
  }

});

