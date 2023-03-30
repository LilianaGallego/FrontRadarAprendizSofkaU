import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthfireService } from 'src/app/services/authfire.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/shared/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  disableSelect = new FormControl(false);
  regForm!: FormGroup;

  constructor(private toast: ToastrService,
    private auth: AuthfireService,
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService) {
      this.crearFormulario()
     }

  roles: Roles[] = [
    { value: "deafult", viewValue: 'Seleccione una opción' },
    { value: "ROLE_APPRENTICE", viewValue: 'Aprendiz' },
    { value: "ROLE_OPERATION", viewValue: 'Operador' },
    { value: "ROLE_ADMIN", viewValue: 'Administrador' },
  ];

  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      role: [this.roles[0].value, Validators.required]
    })
  }


  onReg() {

    if (this.regForm.invalid) {

      this.toast.error('Intenta de nuevo', 'Error en los datos!');
      return Object.values(this.regForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {
      var fireForm = {
        email: this.regForm.value.email,
        password: this.regForm.value.password
      }
      try{
      return this.auth.register(fireForm).then(res => {
        var body = {
          name: this.regForm.value.name,
          lastName: this.regForm.value.lastName,
          email: this.regForm.value.email,
          password: res.user.providerId,
          role: this.regForm.value.role
        }
        this.userService.saveUser(body).subscribe(res => {

          this.toast.success('Redirigiendo...', 'Registro exitoso!')
          setTimeout(() => {
            this.route.navigate(['/website/user'])
          }, 1500);
        })

      })
    }catch(err){
      console.log(err);
     return this.toast.error('Error inesperado', 'Vuelve a intentarlo, porfavor.');
    }
    }

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
