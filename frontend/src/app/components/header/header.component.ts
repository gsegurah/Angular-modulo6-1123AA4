import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Necesario para routerLink en el HTML

@Component({
  selector: 'app-header',
  standalone: true, // ¡Indica que es un componente standalone!
  imports: [RouterModule], // ¡Importa RouterModule para que routerLink funcione!
  templateUrl: './header.component.html', // Apunta a tu archivo HTML
  styleUrls: ['./header.component.css'] // Apunta a tu archivo CSS
})
export class HeaderComponent {
  // Aquí puedes añadir propiedades o métodos si tu cabecera necesita lógica
  
}