import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConductorsModel } from '../../core/models/conductors.interface';
import { environment } from 'src/environments/environment';
import { VehicleModel } from 'src/app/core/models/vehicle.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vari = environment.baseUrl;
  private respons = {};
  constructor(private http: HttpClient) {}

  getAllVehicles() {
    return this.http.get(`${this.vari}vehiculo/vehiculo/`);
  }
  createVeh(Veh: VehicleModel) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(Veh);
    this.http
      .post(`${this.vari}vehiculo/vehiculo/`, body, {
        headers: headers,
        observe: 'response',
      })
      .subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Se creo el vehículo con éxito',
            confirmButtonText: 'Aceptar',
          });
          this.getAllVehicles()
          console.log('creado con extio' + response);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Se presento un error en el servidor',
            confirmButtonText: 'Aceptar',
          });
          console.log('Post failed with the errors');
        }
      );
  }
}
