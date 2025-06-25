import { Component } from '@angular/core';


interface Sedan {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-sedanes',
  standalone: true,
  templateUrl: './sedanes.component.html',
  styleUrls: ['./sedanes.component.css']
})
export class SedanesComponent {
  
  sedans: Sedan[] = [
    {
      image: './img/sedanes/sedan1.jpg', 
      title: 'Mercedes-Benz Clase C',
      description: 'Un sedán que combina elegancia, rendimiento y tecnología de punta para una experiencia de conducción superior.'
    },
    {
      image: './img/sedanes/sedan2.jpg',
      title: 'BMW Serie 3',
      description: 'Deportivo y sofisticado, ideal para quienes buscan dinamismo y lujo en cada viaje.'
    },
    {
      image: './img/sedanes/sedan3.jpg',
      title: 'Audi A4',
      description: 'Un equilibrio perfecto entre confort, innovación y diseño, para los amantes de la alta ingeniería.'
    },
    {
      image: './img/sedanes/sedan4.jpg',
      title: 'Toyota Camry',
      description: 'Confiabilidad legendaria y eficiencia, un sedán espacioso y cómodo para el día a día.'
    },
    {
      image: './img/sedanes/sedan5.jpg',
      title: 'Honda Civic',
      description: 'Diseño moderno y excelente manejo, un referente en su segmento por su versatilidad y eficiencia.'
    },
    {
      image: './img/sedanes/sedan6.jpg',
      title: 'Hyundai Elantra',
      description: 'Estilo contemporáneo y características avanzadas, ideal para una conducción placentera y conectada.'
    }
  ];
}