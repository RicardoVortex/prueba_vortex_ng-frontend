import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  List: any;
  id_number: number;
  data: any;
  constructor(
    public driversServ: DriversService,
    private servicioData: DataService
  ) {}

  ngOnInit(): void {
    /* this.driversServ.getAllDrivers().subscribe(
      (response) => {
        this.List = response;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Se presneto un error en el servidor',
          confirmButtonText:'Aceptar',
        });
      }
    );*/
    const data = [
      {
        id: 1,
        nombre: 'Johan ANDRES',
        apellido: 'Apche',
        direccion: '80 kl',
        telefono: '3124469702',
        identificacion: 'dsa',
      },
      {
        id: 2,
        nombre: 'Romero Medina',
        apellido: 'Apche',
        direccion: '80 kl',
        telefono: '3124469702',
        identificacion: 'dsa',
      },
      {
        id: 3,
        nombre: 'Juan Torres',
        apellido: 'Apche',
        direccion: 'cr 18 r',
        telefono: '3124469702',
        identificacion: 'dsa',
      },
    ];
    this.List = data;
  }

  GetId(id: number) {
    this.id_number = id;
    this.driversServ.getAllDriversDeso(id).subscribe((response) => {
      this.data = response;
      this.servicioData.dataList = this.data;
    });
  }
}
