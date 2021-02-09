import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElService {

  /* url="http://localhost:3000/mails"; */
  url = "https://api.sendgrid.com/v3/mail/send";

  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
    /* $key: new FormControl(null), */
    office: new FormControl('', Validators.required),
    home: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    conflicts: new FormControl('', Validators.required)
  });

  Submit(data: any) {
    return this.http.post(this.url,data);
    /* const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'test@example.com',
      from: 'qistina.mahmud', // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //ES6
    sgMail
      .send(msg)
      .then(() => {}, error => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      });
    //ES8
    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })(); */
  }
}
