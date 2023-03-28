import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  disableSelect = new FormControl(false);

  roles: Roles[]= [
    {value: "deafult", viewValue: 'Seleccione una opción'},
    {value: "apprendice", viewValue: 'Aprendiz'},
    {value: "operator", viewValue: 'Operador'},
    {value: "admin", viewValue: 'Administrador'},
  ];

  regForm = new FormGroup({
    username: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl(this.roles[0].value, Validators.required)
  })

  onReg(){
    console.log(this.regForm.value);
  }

}

interface Roles {
  value: string;
  viewValue: string;
}

// enum Role {
//   ROLE_APPRENDICE = "apprendice",
//   ROLE_OPERATOR = "operator",
//   ROLE_ADMIN = "admin",
//  }
