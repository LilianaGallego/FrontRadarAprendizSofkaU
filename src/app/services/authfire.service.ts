import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthfireService {

  token!: string;
  constructor(private auth: Auth) { 
    
  }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login({ email, password }: any) {
     await signInWithEmailAndPassword(this.auth, email, password).then(
      response => {
        this.auth.currentUser?.getIdToken().then(
          token => {
            this.token = token;
            localStorage.setItem('token', this.token)
          }
        )
      }
    );
  }

  logout() {
     signOut(this.auth).then(()=> {
      this.token = "";
      localStorage.setItem('token',this.token);
      localStorage.setItem('role', '');
    });
  }
}
