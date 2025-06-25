import { Component } from '@angular/core';

interface SportsCar {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-deportivos',
  templateUrl: './deportivos.component.html',
  styleUrls: ['./deportivos.component.css']
})
export class DeportivosComponent {
  // Array de deportivos que se mostrarán en la página
  sportsCars: SportsCar[] = [
    {
      image: './img/deportivos/deportivo1.jpg', // Asegúrate de tener estas imágenes en src/assets/img/deportivos/
      title: 'Porsche 911 Carrera',
      description: 'Un ícono de la ingeniería alemana, combina rendimiento excepcional y un diseño atemporal.'
    },
    {
      image: './img/deportivos/deportivo2.jpg',
      title: 'Ferrari F8 Tributo',
      description: 'La máxima expresión de potencia y pasión italiana, con un motor V8 que ruge en cada aceleración.'
    },
    {
      image: './img/deportivos/deportivo3.jpg',
      title: 'Lamborghini Huracán Evo',
      description: 'Diseño agresivo y prestaciones de superdeportivo, puro arte y adrenalina en cuatro ruedas.'
    },
    {
      image: './img/deportivos/deportivo4.jpg',
      title: 'Chevrolet Corvette Stingray',
      description: 'El deportivo americano por excelencia, con un diseño radical y un rendimiento que sorprende.'
    },
    {
      image: './img/deportivos/deportivo5.jpg',
      title: 'Nissan GT-R',
      description: 'Conocido como "Godzilla", un deportivo japonés con tecnología avanzada y una aceleración brutal.'
    },
    {
      image: './img/deportivos/deportivo6.jpg',
      title: 'McLaren 720S',
      description: 'Innovación británica en su máxima expresión, ligereza y aerodinámica para un rendimiento sin igual.'
    }
  ];
}