import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule, 
    MatListModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  typesOfServices: string[] = ['Oil Service', 'Denting & Painting', ' Interior & Exterior Cleaning', 'Engine and Transmission', ' Other'];
 
  constructor(
    private fb: FormBuilder
  ){

  }
  public bookNowForm = this.fb.group({
    firstName: ['', Validators.required],
    SecondName: [''],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    vehicleDetails: ['', Validators.required],
    serviceType: ['']
  })

  onlyNumberKey(event: KeyboardEvent): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    return charCode >= 48 && charCode <= 57; // Allow only digits (0-9)
  }

  onServiceTypeChange(event: any) {
    const selected = event.source.selectedOptions.selected.map((item:any) => item.value);
    this.bookNowForm.get('serviceType')?.setValue(selected);
  }

  saveForm(){
    console.log("saving", this.bookNowForm.getRawValue());
  }
  
}
