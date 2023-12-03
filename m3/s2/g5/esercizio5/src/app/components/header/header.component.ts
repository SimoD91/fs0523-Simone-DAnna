import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  routeCompletatiAttiva(): boolean {
    return this.router.isActive('/todo-completati', true);
  }
}

/* --isActive me lo segna come deprecato ma è l'unico modo
che ho trovato per far cambiare lo stile estetico al titolo della route,
in modo da mostrare su quale pagina ci troviamo-- */
