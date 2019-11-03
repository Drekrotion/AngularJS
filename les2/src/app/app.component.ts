import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'les1';
  search: string = '';
  status: boolean = false;
  isLogin: boolean = false;
  isRegister: boolean = false;
  isHouses: boolean = false;
  isShow: boolean = false;
  index: number = -1;
  Login: string = '';

  employeeLogin = {
    emailLogin: '',
    passwordLogin: ''
  };

  employee = {
    name: '',
    email: '',
    password: '',
    age: '',
    is_blocked: Boolean(Math.floor(Math.random() * 2))
  };

  user: Array<any> = [
    {
      name: 'Roman',
      email: 'roman@doma.net',
      password: '24235ggdg',
      age: 23,
      is_blocked: false
    },
    {
      name: 'Taras',
      email: 'taras@doma.net',
      password: '242asrw4635ggdg',
      age: 25,
      is_blocked: false
    },
    {
      name: 'Dima',
      email: 'dima@doma.net',
      password: '21444235ggdg',
      age: 21,
      is_blocked: true
    }
  ];

  houses: Array<any> = [
    {
      address: 'Lviv',
      price: 45000,
      owner: this.user[0],
      squareMeters: 47,
      floors: 2,
      id_house: 1
    },
    {
      address: 'Odesa',
      price: 55000,
      owner: this.user[1],
      squareMeters: 87,
      floors: 2,
      id_house: 2
    },
    {
      address: 'Ternopil',
      price: 22000,
      owner: this.user[2],
      squareMeters: 59,
      floors: 1,
      id_house: 3
    }
  ];


  onInput(ev) {
    this.search = ev.target.value;
  };

  onClick() {
    this.status = !this.status;
  };

  isLoginClicker() {
    this.isLogin = !this.isLogin;
    this.isRegister = false;
  };

  isRegisterClicker() {
    this.isRegister = !this.isRegister;
    this.isLogin = false;
  };

  isShowHouses() {
    this.isHouses = !this.isHouses;
  };

  isShowHouse(idHouse: number) {
    this.index = idHouse;
  }

  registerUser() {
    this.user.push(this.employee);
    console.log(this.user);
  }

  loginUser() {
    const logUser = this.user.find(user =>
      this.employeeLogin.emailLogin === user.email &&
      this.employeeLogin.passwordLogin === user.password
    );
    logUser ? this.Login = 'Welcome' : this.Login = 'User is not found'
  }
}

