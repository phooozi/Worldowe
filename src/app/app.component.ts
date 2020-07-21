import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>
    <app-header></app-header>
    <div id="wrapper">
    <router-outlet></router-outlet>
    </div>
    
  </body>
  <app-footer></app-footer>
  
    
  
  `,
  styles: [
    `
    html{
    height: 100%;
}
body{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    min-height: calc(100vh - 53.53px - 109px);
    background-color: #24252A;
}`
  ]
})
export class AppComponent {
  title = 'Redposted';
}
