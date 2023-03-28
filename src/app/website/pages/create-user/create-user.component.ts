import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  roles: Roles[] = [
    {value: Role.ROLE_APPRENDICE, viewValue: 'Aprendiz'},
    {value: Role.ROLE_OPERATOR, viewValue: 'Operador'},
    {value: Role.ROLE_ADMIN, viewValue: 'Administrador'},
  ];
}

interface Roles {
  value: string;
  viewValue: string;
}

enum Role {
  ROLE_APPRENDICE = "apprendice",
  ROLE_OPERATOR = "operator",
  ROLE_ADMIN = "admin",
 }
