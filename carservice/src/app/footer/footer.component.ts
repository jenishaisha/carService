import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
formData = {
  phoneNumber: '',

  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formSubmitUrl = 'https://formsubmit.co/1f621e691acc94697f853a92a713672b';

    const body = new HttpParams()
      .set('first_name', this.formData.phoneNumber)
     
      .set('_template', 'table')
      .set('_subject', 'New Contact Form Submission')
      .set('_captcha', 'false');

    // Submit to FormSubmit
    this.http.post(formSubmitUrl, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe({
      next: () => {
        this.openWhatsApp();
      },
      error: (err) => {
        console.error('FormSubmit failed', err);
        this.openWhatsApp(); // Optionally still open WhatsApp
      }
    });
  }

  openWhatsApp() {
    const phone = '918056857356'; // Replace with your WhatsApp number (with country code)
    const message = `Hello! New submission:\nphoneNumber: ${this.formData.phoneNumber}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }




}
