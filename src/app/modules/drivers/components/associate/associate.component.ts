import {
  Component,
  OnInit,
  Input,
  HostListener,
  AfterContentInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel } from 'src/app/core/models/vehicle.interface';
import { drivers } from 'src/app/models/drivers';
import { DataService } from 'src/app/services/data.service';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css'],
})
export class AssociateComponent implements OnInit {
  posts: any;
  constructor(public driversServ: DriversService,public servicioData:DataService) {
  }
  dataCh: any;
  ngOnInit(): void {

  }

  onCategoriaPressed(categoriaSelected: any, checked: boolean) {
    if (checked) {
      this.dataCh = categoriaSelected;
    }
  }
  onSumnit() {
    const id = this.dataCh.id;
    this.driversServ.uptDriversAso(this.dataCh, id);
  }
}
