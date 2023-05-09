import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleModel } from 'src/app/core/models/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  eventForm: FormGroup;
  checkoutForm;

  constructor(public vehucileService: VehicleService,private formBuilder: FormBuilder ) { 
    this.checkoutForm = this.formBuilder.group({
      placa: '',
      modelo: '',
      capacidad:'',
    });

  }

  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      placa: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(8),
      ]),
      modelo: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      capacidad: this.formBuilder.control(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
   
    });
  }
  createEvento(customerData:VehicleModel){
    this.vehucileService.createVeh(customerData);

  }

}
