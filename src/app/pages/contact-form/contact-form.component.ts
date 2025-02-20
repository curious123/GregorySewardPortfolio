import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    ContactService
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  FormData!: FormGroup;

  constructor(private readonly contact: ContactService) { }

  ngOnInit() {
    this.FormData = new FormGroup({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Subject: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])})
  }

  onSubmit(FormData: FormGroup): void {
    console.log(FormData);
    this.contact.PostMessage(FormData.value)
      .subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.warn(error.responseText);
          console.log({ error });
        }
      });
  }
}
