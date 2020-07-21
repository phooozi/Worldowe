import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img class="logo" src="assets/img/angular.png" alt="logo">
      <h1>The Red Post</h1>
      <nav>
        <ul class="nav_links">
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </nav>
    </header>
    <div class="navbar">
      <div class="navbar-brand">
        <a (click)="navSlide()" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <!--Navigation Bar-->
      <div class="navbar-menu is-active">
        <div class="navbar-list has-text-centered">
          <li><a class="navbar-item" routerLink="/">Home</a></li>
          <li><a class="navbar-item" routerLink="/storypage">Stories</a></li>
          <li><a class="navbar-item" routerLink="/donate">Donate</a></li>
          <li><a class="navbar-item" routerLink="/contact">Contact</a></li>
        </div>
      </div>
    </div>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
  li, a{
    
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
  }
  li, a:hover{
    color: #0088a9;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 32px;
    color: red;
    text-decoration: none;
    position: relative;
    right: 36px;
  
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5%;
  }
  img{
    width: 120px;
    height: auto;
  }
  .navbar {
    background-color: #0002;
  }
  .navbar-menu{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    
  }
  .navbar .navbar-menu .navbar-list li{
      letter-spacing: 3px;
      display: inline-block;
      padding: 0px 50px;
    }
    .navbar .navbar-menu .navbar-list li a{
      color: white;
      font-family: 'Montserrat', sans-serif;
      transition: all 0.3s ease 0s;
      font-weight: 500;
      font-size: 20px;
      color: #edf0f1;
      text-decoration: none;
      background-color: transparent;
    }
    .navbar .navbar-menu .navbar-list li a:hover{
      color: #0088a9;
      background-color: transparent;
    }
    
  @media (max-width: 1023px){
    .navbar-menu{
      background-color: #202020;
      display: flex;
      min-height: 100vh;
      position: absolute;
      right: 0px;
      width: 300px;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
    }
    h1{
      display: none;
    }

    .navbar .navbar-menu .navbar-list li{
      letter-spacing: 3px;
      padding: 30px;
    }
    .navbar .navbar-menu .navbar-list{
      display: inline-block;
      flex-direction: column;
      align-items: center;


    }
    
  }
  .navbar-active{ 
        transform: translateX(0%);    
        
  }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navSlide(){
    const nav = document.querySelector('.navbar-menu');
    nav.classList.toggle('navbar-active')
  } 
  

}
