import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Usuario:String = "";
  Pass:String = "";
  constructor() { }
  Entrar()
  {
    console.log(this.Usuario);
    console.log(this.Pass);
  }

  
  ngOnInit() {
  }

}
