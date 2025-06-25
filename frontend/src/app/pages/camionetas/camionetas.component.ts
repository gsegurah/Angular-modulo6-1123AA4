import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para la directiva @for

// Opcional: Define una interfaz para las camionetas
interface Truck {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-camionetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camionetas.component.html',
  styleUrls: ['./camionetas.component.css']
})
export class CamionetasComponent {
  // Define la propiedad 'trucks' aquí con datos de ejemplo
  // Asegúrate de que las imágenes existan en public/img/camionetas/
  trucks: Truck[] = [ // Usando la interfaz Truck para mejor tipado
    {
      image: 'img/camionetas/camioneta1.jpg', // <-- ¡Ruta corregida!
      title: 'Ford F-150 Raptor',
      description: 'Lista para cualquier terreno, con potencia inigualable y durabilidad extrema.'
    },
    {
      image: 'img/camionetas/camioneta2.jpg', // <-- ¡Ruta corregida!
      title: 'Chevrolet Silverado 1500',
      description: 'La combinación perfecta de fuerza, tecnología y confort para tu trabajo o aventura.'
    },
    {
      image: 'img/camionetas/camioneta3.jpg', // <-- ¡Ruta corregida!
      title: 'Ram 1500 Limited',
      description: 'Lujo y capacidad de remolque sin igual, con un interior premium y alto rendimiento.'
    },
    {
      image: 'img/camionetas/camioneta4.jpg', // <-- ¡Ruta corregida!
      title: 'Toyota Tacoma TRD Pro',
      description: 'Fiabilidad y capacidad off-road legendarias, ideal para explorar nuevos caminos.'
    },
    {
      image: 'img/camionetas/camioneta5.jpg', // <-- ¡Ruta corregida!
      title: 'GMC Sierra 1500 AT4',
      description: 'Diseño robusto y tecnología avanzada para los desafíos más exigentes.'
    },
    {
      image: 'img/camionetas/camioneta6.jpg', // <-- ¡Ruta corregida!
      title: 'Nissan Frontier Pro-4X',
      description: 'Rendimiento comprobado y versatilidad para el trabajo y la aventura.'
    }
  ];
}