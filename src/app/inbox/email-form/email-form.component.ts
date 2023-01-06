import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent {
  emailForm!: FormGroup;
  @Input() email!: Email;

  ngOnInit() {
    this.emailForm = new FormGroup({
      subject: new FormControl(this.email.subject, [Validators.required]),
      from: new FormControl({ value: this.email.from, disabled: true }),
      to: new FormControl(this.email.to, [
        Validators.required,
        Validators.email,
      ]),
      text: new FormControl(this.email.text, [Validators.required]),
    });
  }
}
