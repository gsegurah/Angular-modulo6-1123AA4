import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Asumo que tus archivos header.ts y footer.ts exportan las clases HeaderComponent y FooterComponent
import { HeaderComponent } from "./components/header/header.component"; // <--- ¡Asegúrate de que la ruta y el nombre del archivo sean header.component.ts!
import { FooterComponent } from "./components/footer/footer.component"; // <--- ¡Asegúrate de que la ruta y el nombre del archivo sean footer.component.ts!

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que esta línea esté presente
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // <--- ¡Usa HeaderComponent y FooterComponent aquí!
  templateUrl: './app.component.html', // O './app.html' si ese es tu nombre de archivo
  styleUrl: './app.component.css' // O './app.css' si ese es tu nombre de archivo
})
export class App {
  protected title = 'frontend';
}