import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent {
  showModal = false;
  email: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      subject: '',
      from: `${this.authService.username}@angular-email.com`,
      to: '',
      text: '',
      html: '',
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
