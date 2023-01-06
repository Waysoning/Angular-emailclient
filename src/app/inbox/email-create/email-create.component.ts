import { Component } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;

  constructor() {
    this.email = {
      id: '',
      subject: '',
      from: '',
      to: '',
      text: '',
      html: '',
    };
  }
}
