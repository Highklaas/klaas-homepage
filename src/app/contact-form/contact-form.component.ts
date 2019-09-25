import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  controls = {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    time: new FormControl(''),
    budget: new FormControl(''),
    description: new FormControl('', [Validators.required]),
  };

  firstContactForm = new FormGroup(this.controls);

  constructor() { }

}
