import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
  <header>
  <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet">
  </header>
    <body>
      <div class="hero is-fullheight">
        <div class="form-box">
        <button (click)="switch()" type="button" class="click-btn ">Click here</button>
          <div class="button-box">
            <div id="btn"></div>
            <button type="button" class="toggle-btn ">Sign In</button>
            <button type="button" class="toggle-btn ">Sign Up</button>
          </div>
          <div class="social-icons">
            <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          </div>
          <form id="login" class="input-group">
            <input type="text" class="input-field" placeholder="User Id" required>
            <input type="text" class="input-field" placeholder="Password" required>
            <input type="checkbox" class="check-box"><span>Remember Password</span>
            <button type="submit" class="button is-large is-warning">
            Login
          </button>
          </form>
          <form id="register" class="input-group">
            <input type="text" class="input-field" placeholder="User Id" required>
            <input type="email" class="input-field" placeholder="Email" required>
            <input type="text" class="input-field" placeholder="Password" required>
            <input type="checkbox" class="check-box"><span>I agree to the terms & conditions</span>
            <button type="submit" class="button is-large is-warning">
            Register
          </button>
          </form>
        </div>
        
      </div>
    </body>
  `,
  styles: [`
  *{
    margin: 0;
    padding: 0;
  }
  .hero{
    
		background-size: cover;
		background-position: center center;
  }
  .form-box{
    width: 480px;
    height: 580px;
    position: relative;
    margin: 6% auto;
    background: #fff;
    padding: 5px;
    overflow: hidden;
    
  }
  .click-btn{
    width: 30%;
    padding: 5px 5px;
    cursor: pointer;
    display: block;
    margin: 5px auto;
    position: relative;
    background: linear-gradient(to right, black, grey);
    border: 0;
    outline: none;
    border-radius: 30px;
    transform: translateY(110%);
    font-family: 'Yellowtail', cursive;
    font-size: 16px;
    color: white;
    ;
  }
  .button-box{
    width: 220px;
    top: 15px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 30px;
  }
  .toggle-btn{
    padding: 5px 30px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
    font-family: 'Oswald', sans-serif;
    margin: 3px;
  }
  #btn{
    top: 0;
    left: 0;
    position: absolute;
    width: 110px;
    height: 100%;
    background: linear-gradient(to right, #e66465, #9198e5);
    border-radius: 30px;
    transition: .5s;
    
  }
  .social-icons{
    margin: 30px auto;
    text-align: center;
  }
  .social-icons li{
    display: inline-block;
    padding: 0 5px;
    font-size: 30px;
    margin: 0 12px;
    cursor: pointer;
  }
  .input-group{
    top: 180px;
    position: absolute;
    width: 280px;
    transition: .5s;
  }
  .button{
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background: linear-gradient(to right, #e66465, #9198e5);
    border: 0;
    outline: none;
    border-radius: 30px;
  }
  .input-field{
    width: 100%;
    padding: 15px 0;
    margin: 10px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline: none;
    background: transparent;
  }
  .check-box{
    margin: 30px 10px 30px 0;
  }
  span{
    color: #777;
    font-size: 12px;
    bottom: 87px;
    position: absolute;
    
  }
  #login{
    left: 100px;
  }
  #register{
    left: 500px;
  }
  .login-inactive{ 
    transform: translateX(-150%); 
    transition: transform 0.5s ease-in;    
  }
  .register-active{
    transform: translateX(-143%);
    transition: transform 0.5s ease-in;
  }
  .btn-up{
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  `
  ]
})
export class SignupComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
  }
  switch(){
    const nav = document.querySelector("#login")
    nav.classList.toggle('login-inactive')
    const yes = document.querySelector("#register")
    yes.classList.toggle('register-active')
    const btn = document.querySelector("#btn")
    btn.classList.toggle('btn-up')
  }
}
