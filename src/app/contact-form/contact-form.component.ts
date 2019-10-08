import { Component, Injectable, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor(private http: HttpClient) {}

  controls = {
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    time: new FormControl(''),
    budget: new FormControl(''),
    description: new FormControl('', [Validators.required]),
  };

  firstContactForm = new FormGroup(this.controls);

  ngOnInit() {}

  submitForm() {
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('name', this.firstContactForm.value.name);

    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).subscribe(
      res => {}
    );
  }

}
