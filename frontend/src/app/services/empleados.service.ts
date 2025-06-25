import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para el modelo de Empleado (debe coincidir con la del componente y el backend)
interface Empleado {
  _id?: string;
  cedula: string;
  nombre: string;
  puesto: string;
  oficina: string;
  salario: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  // URL base de tu API de empleados
  readonly API_URL = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) { }

  // Obtener todos los empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.API_URL);
  }

  // Obtener un solo empleado por ID
  getEmpleado(id: string): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.API_URL}/${id}`);
  }

  // Crear un nuevo empleado
  postEmpleado(empleado: Empleado): Observable<any> {
    // Asegúrate de no enviar el _id al crear un nuevo empleado, ya que lo genera la base de datos
    const { _id, ...empleadoData } = empleado;
    return this.http.post(this.API_URL, empleadoData);
  }

  // Actualizar un empleado existente (PUT)
  putEmpleado(empleado: Empleado): Observable<any> {
    if (!empleado._id) {
      throw new Error('El ID del empleado es necesario para actualizar.');
    }
    return this.http.put(`${this.API_URL}/${empleado._id}`, empleado);
  }

  // Eliminar un empleado
  deleteEmpleado(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  }