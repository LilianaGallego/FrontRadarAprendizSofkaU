import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private toast: ToastrService) { }
  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();

    this.toast.success('Sesión cerrada.', 'Redireccionado al login...')
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
