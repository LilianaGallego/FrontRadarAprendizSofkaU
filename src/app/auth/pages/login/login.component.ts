import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthfireService } from 'src/app/services/authfire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  emailpass = new FormControl('');


  constructor(private auth: AuthfireService,
    private router: Router,
    ){

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  async login(){
    const email = this.form.value.email;
    const password = this.form.value.password;
    console.log(this.form.value);

    this.auth.login(this.form.value)
    .then(res => {
      console.log(res);
      this.router.navigate(['/website']);
    })
    .catch(err => console.log(err))

  }

  async onReset(){
    try{
    const email = this.emailpass.value;
    
   await this.auth.resetPassword(email!);

    window.alert('se envio.');
    }catch(err){console.log(err);
  
    }

  }
}
