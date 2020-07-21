import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <body>
    <!--Header For Story Sharing Page-->
    <section class="hero is-dark is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Share Your Story With Us!</h1>
    </div>
    </div></section>
    <!--Form Section-->
    <section class="section">
      <div class="container">
        
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <!--Name Input Section-->
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)] ="name" #nameInput="ngModel" required>
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">Your name is required!</div>
          </div>
          <!--Email Input Section-->
          <div class="field">
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required email>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
              Your email is required!
            </div>
          </div>
          <!--Message Section-->
          <div class="field">
            <label class="label">Your Story</label>
            <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
          </div>
          <!--Button-->
          <button type="submit" class="button is-large is-warning"[disabled]="contactForm.invalid">
            Send!
          </button>


        </form>
      </div>
    </section>
  </body>

  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }
  //Method to submit form
  submitForm(){
    const message = `My name is ${this.name} and I am sending my story.`;
    alert(message);
  }

}
