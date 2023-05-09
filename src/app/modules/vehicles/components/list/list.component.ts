import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  List:any;

  constructor(public driversServ:VehicleService) { }


  ngOnInit(): void {
    this.consult();
    //     const data =[
    //    {
    //      id:1,
    //      placa:"HGO-154",
    //      modelo:"Apache",
    //      capacidad:"124",
    //    },
    //    {
    //      id:2,
    //      placa:"HGO-154",
    //      modelo:"Apache",
    //      capacidad:"1",
    //    },
    //    {
    //      id:3,
    //      placa:"HGO-154",
    //      modelo:"Apache",
    //      capacidad:"12",
    //    },
    //  ]
    //  this.List = data;
  }
   consult (){
    this.driversServ.getAllVehicles().subscribe(
      response =>{
        this.List = response;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Se presento un error en el servidor',
          confirmButtonText:'Aceptar',
        });
      }
    );
  }
}
