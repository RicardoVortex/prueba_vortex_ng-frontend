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
        nombre: 'Johan ',
        apellido: 'Romero',
        direccion: 'cr 18 r',
        telefono: '3124469702',
        identificacion: '1.000.153.783',
      },
      {
        id: 2,
        nombre: 'Romero ',
        apellido: 'Medina',
        direccion: 'cr 18 r',
        telefono: '3124469702',
        identificacion: '1.000.153.783',
      },
      {
        id: 3,
        nombre: 'Juan ',
        apellido: 'Torres',
        direccion: 'cr 18 r',
        telefono: '3124469702',
        identificacion: '1.000.153.783',
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
