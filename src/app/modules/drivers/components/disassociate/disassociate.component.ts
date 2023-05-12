import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DriversService } from 'src/app/services/drivers/drivers.service';

@Component({
  selector: 'app-disassociate',
  templateUrl: './disassociate.component.html',
  styleUrls: ['./disassociate.component.css']
})
export class DisassociateComponent implements OnInit {
  blogList:any;
  dataCh:any;
  posts:any;

  constructor(public driversServ:DriversService,public servicioData:DataService) { }

  ngOnInit(): void {
    const data = [
      {
        id: 1,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '124',
      },
      {
        id: 2,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '1',
      },
      {
        id: 3,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '12',
      },
      {
        id: 4,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '12',
      },
      {
        id: 5,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '12',
      },
      {
        id: 6,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '12',
      },
      {
        id: 7,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '12',
      },
      {
        id: 8,
        placa: 'HGO-154',
        modelo: 'Apache',
        capacidad: '12',
      },
    ];
    this.servicioData.dataList = data;
  }
  onCategoriaPressed(categoriaSelected: any, checked: boolean){
    if (checked) {
      this.dataCh = categoriaSelected;
    }
  }
  onSumnit(){
    const id = this.dataCh.id;
    this.driversServ.uptDriversDesAso(this.dataCh,id)
  }

}
