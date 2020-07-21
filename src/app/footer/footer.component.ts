import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  
  <!--Footer Message-->
<footer class="footer">
  <div class="inner_footer">
    <div class="logo_container">
      <img src="/assets/img/angular.png">
    </div>
    <div class="footer_third has-text-centered">
      <h1>Copyright <i class="fa fa-copyright" aria-hidden="true"> 2020</i>, The World Needs Love</h1>
    </div>
    <div class="footer_fourth has-text-right">
      <h1>Follow Us</h1>
      <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <span>
        |  Email Contact At: something@gmail.com<br>
      </span>
    </div>
  </div>
</footer>
  `,
  styles: [
    `
    .footer{
      width: 100vw;
      display: inline-block;
      overflow: hidden;
      padding: 5px 0;
      padding-bottom: 2px;
      border-top: 2px solid grey;
      margin-top: 0%;
      position: absolute;
      
    }
    .inner_footer {
      display: block;
      margin: 0 auto;
      width: 80%;
      
    }
    .inner_footer .logo_container{
      width: 35%;
      float: left;
      height: 100%;
      display: block;
    }
    .inner_footer .logo_container img{
      width: 120px;
      height: auto;
    }
    .inner_footer .footer_third{
      width: 64%;
      height: 0px;
    }
    .inner_footer .footer_third h1{
      font-family: 'arial';
      font-size: 16px;
      display: block;
      width: 100%;
    }
    .inner_footer .footer_fourth{
      float: right;
      width: 15%;  
      
    }
    .inner_footer .footer_fourth h1{
      font-family: 'arial';
      font-size: 18px;
      display: block;
      width: 100%;
      margin-bottom: -8px;
      
      
    }
    .inner_footer .footer_fourth li{
      display: inline-block;
      padding: 0 5px;
      font-size: 20px;

    }
    @media (max-width: 1023px){
      .footer{
        display: none;
      }
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
