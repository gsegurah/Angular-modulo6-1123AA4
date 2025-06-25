//empleados.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas como @for, @if, etc.
import { FormsModule } from '@angular/forms'; // Necesario para ngModel en los formularios
import { HttpClient } from '@angular/common/http'; // Para hacer solicitudes HTTP (lo inyectamos a través de EmpleadoService)
import { EmpleadoService } from '../../services/empleados.service'; // Servicio que creamos para manejar las llamadas a la API

// Interfaz para el modelo de Empleado, basada en tu esquema de Mongoose
interface Empleado {
  _id?: string; // El ID es opcional porque lo genera la BD al crear
  cedula: string;
  nombre: string;
  puesto: string;
  oficina: string;
  salario: number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos los módulos necesarios
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  // Lista de empleados
  empleados: Empleado[] = [];
  // Objeto para el formulario (nuevo empleado o empleado a editar)
  selectedEmpleado: Empleado = {
    cedula: '',
    nombre: '',
    puesto: '',
    oficina: '',
    salario: 0
  };
  // Propiedad para saber si estamos editando
  isEditing: boolean = false;
  // Propiedad para el mensaje de estado (éxito/error)
  statusMessage: string = '';
  statusType: 'success' | 'error' | '' = '';

  // Inyectamos HttpClient para hacer las llamadas a la API
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados(); // Cargar empleados al iniciar el componente
  }

  // Obtener todos los empleados desde el backend
  getEmpleados(): void {
    this.empleadoService.getEmpleados().subscribe({
      next: (res) => {
        this.empleados = res;
        this.clearStatusMessage();
      },
      error: (err) => {
        console.error('Error al obtener empleados:', err);
        this.showStatusMessage('Error al cargar los empleados. Inténtalo de nuevo.', 'error');
      }
    });
  }

  // Añadir o editar un empleado
  addOrEditEmpleado(): void {
    // Si estamos editando un empleado existente
    if (this.selectedEmpleado._id) {
      this.empleadoService.putEmpleado(this.selectedEmpleado).subscribe({
        next: (res) => {
          console.log(res);
          this.showStatusMessage('Empleado actualizado exitosamente.', 'success');
          this.getEmpleados(); // Recargar la lista
          this.resetForm(); // Limpiar el formulario
        },
        error: (err) => {
          console.error('Error al actualizar empleado:', err);
          this.showStatusMessage('Error al actualizar el empleado: ' + (err.error.message || 'Error desconocido'), 'error');
        }
      });
    } else {
      // Si estamos creando un nuevo empleado
      this.empleadoService.postEmpleado(this.selectedEmpleado).subscribe({
        next: (res) => {
          console.log(res);
          this.showStatusMessage('Empleado guardado exitosamente.', 'success');
          this.getEmpleados(); // Recargar la lista
          this.resetForm(); // Limpiar el formulario
        },
        error: (err) => {
          console.error('Error al crear empleado:', err);
          this.showStatusMessage('Error al guardar el empleado: ' + (err.error.message || 'Error desconocido'), 'error');
        }
      });
    }
  }

  // Llenar el formulario con los datos del empleado para editar
  editEmpleado(empleado: Empleado): void {
    this.selectedEmpleado = { ...empleado }; // Copiamos el objeto para no modificar directamente la lista
    this.isEditing = true;
  }

  // Eliminar un empleado
  deleteEmpleado(id: string | undefined): void {
    if (id && confirm('¿Estás seguro de que quieres eliminar este empleado?')) {
      this.empleadoService.deleteEmpleado(id).subscribe({
        next: (res) => {
          console.log(res);
          this.showStatusMessage('Empleado eliminado exitosamente.', 'success');
          this.getEmpleados(); // Recargar la lista
        },
        error: (err) => {
          console.error('Error al eliminar empleado:', err);
          this.showStatusMessage('Error al eliminar el empleado: ' + (err.error.message || 'Error desconocido'), 'error');
        }
      });
    }
  }

  // Resetear el formulario y el estado de edición
  resetForm(): void {
    this.selectedEmpleado = {
      cedula: '',
      nombre: '',
      puesto: '',
      oficina: '',
      salario: 0
    };
    this.isEditing = false;
  }

  // Mostrar mensaje de estado
  showStatusMessage(message: string, type: 'success' | 'error'): void {
    this.statusMessage = message;
    this.statusType = type;
    setTimeout(() => {
      this.clearStatusMessage();
    }, 5000); // El mensaje desaparece después de 5 segundos
  }

  // Limpiar mensaje de estado
  clearStatusMessage(): void {
    this.statusMessage = '';
    this.statusType = '';
  }
}