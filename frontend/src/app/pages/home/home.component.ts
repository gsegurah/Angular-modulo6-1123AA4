import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ¡Importante para que la interpolación de los modulos funcione!

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Detalles para la tarjeta "Sedán Lujoso"
  sedanLujosoDetails = {
    title: 'Sedán Lujoso: Mercedes-Benz Clase C',
    description: 'El Mercedes-Benz Clase C combina elegancia, rendimiento y tecnología de punta. Su interior sofisticado y sus avanzadas características de seguridad lo hacen perfecto para una experiencia de conducción premium, ideal tanto para viajes diarios como para ocasiones especiales.',
    imageUrl: 'img/sedan.jpg' // Ruta desde la carpeta 'public'
  };

  // Detalles para la tarjeta "Camioneta de Trabajo"
  camionetaTrabajoDetails = {
    title: 'Camioneta de Trabajo: Chevrolet Colorado',
    description: 'La Chevrolet Colorado es una camioneta mediana robusta y confiable, diseñada para el trabajo pesado y las aventuras. Ofrece una excelente capacidad de carga y remolque, con motores eficientes y un interior funcional. Perfecta para el día a día en el negocio o para tus escapadas al aire libre.',
    imageUrl: 'img/camioneta.jpg' // Ruta desde la carpeta 'public'
  };

  // Detalles para la tarjeta "Deportivo de Ensueño"
  deportivoEnsuenoDetails = {
    title: 'Deportivo de Ensueño: Ferrari 488 GTB',
    description: 'El Ferrari 488 GTB es una obra de arte de la ingeniería y el diseño italiano. Con un motor V8 turboalimentado que entrega una potencia asombrosa y una estética que roba miradas, ofrece una experiencia de conducción emocionante e inolvidable. Es el sueño de todo amante de la velocidad y la exclusividad.',
    imageUrl: 'img/deportivo.jpg' // Ruta desde la carpeta 'public'
  };

  constructor() { }
}