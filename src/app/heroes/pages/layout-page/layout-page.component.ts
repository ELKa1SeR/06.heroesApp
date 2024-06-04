import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'Listado' , icon: 'label', url:'./list'},
    {label: 'Añadir' , icon: 'add', url:'./new-hero'},
    {label: 'Buscar' , icon: 'search', url:'./search'},
  ]

  constructor(
    private authSercice: AuthService,
    private router: Router
  ){}

  get user(): User | undefined{
      return this.authSercice.currentUser;
  }

  onLogout(){
    this.authSercice.logout();
    this.router.navigate(['/auth/login'])
  }



}
