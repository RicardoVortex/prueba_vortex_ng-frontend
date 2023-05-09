import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  private vari = environment.baseUrl;
  private respons = {};

  constructor(private http: HttpClient) {}

  getAllDrivers() {
    return this.http.get(`${this.vari}conductor/conductor/`);
  }
  createDrivers(Drivers: ConductorsModel) {
    // var bootstrap: any;
    // var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    //   keyboard: false,
    // });
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(Drivers);
    this.http
      .post(`${this.vari}conductor/conductor/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          this.getAllDrivers();
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se creo el conductor con éxito',
            confirmButtonText:'Aceptar',
          });
          //myModal.hide();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se presneto un error en el servidor',
            confirmButtonText:'Aceptar',
          });
        }
      );
  }
  uptDriversAso(Drivers: any, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(Drivers);
    this.http
      .put(`${this.vari}conductor/vehiculos_no_asignados/${id}/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se asigno el conductor  al vehículo',
            confirmButtonText:'Aceptar',
          });
          this.getAllDrivers();
          console.log('creado con extio' + response);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se presento un error en el servidor',
            confirmButtonText:'Aceptar',
          });
          console.log('Post failed with the errors');
        },
      );
  }
  uptDriversDesAso(Drivers: any, id: number) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(Drivers);
    this.http
      .put(`${this.vari}conductor/vehiculos_asignados/${id}/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se asigno el conductor  al vehículo',
            confirmButtonText:'Aceptar',
          });
          this.getAllDrivers();
          console.log('creado con extio' + response);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se presento un error en el servidor',
            confirmButtonText:'Aceptar',
          });
          console.log('Post failed with the errors');
        },
      );
  }

  getAllDriversAso(id: number) {
    return this.http.get(`${this.vari}conductor/vehiculos_asignados/${id}/`);
  }
  getAllDriversDeso(id: number) {
    return this.http.get(`${this.vari}conductor/vehiculos_no_asignados/${id}/`);
  }
}
