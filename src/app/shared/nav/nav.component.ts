import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'shared-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  login: boolean = false;
  name: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loginEmitter.subscribe((data) => {
      this.login = data;
      this.name = JSON.parse(localStorage.getItem('user')!)?.name;
      console.log(JSON.parse(localStorage.getItem('user')!)?.name);
    });
  }

  // observador(): Observable<boolean>{
  // observador(){

  //   setTimeout(() => {
  //     this.name = 'pedrito'
  //     this.login = true
  //   }, 5000)

  //   // if (localStorage.getItem('name') == '') of(false);
  //   // this.name =localStorage.getItem('name')!
  //   //   return of(true);

  // }

  logout() {
    this.authService.logout();
    this.login = false;
  }
  menu() {
    setTimeout(() => {
      let menu: HTMLElement | null = document.querySelector('.menu-mobile');
      if (menu) {
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          menu.classList.add('block');
        } else {
          menu.classList.remove('block');
          menu.classList.add('hidden');
        }
      }
    });
  }
  closeMenu() {
    let menu: HTMLElement | null = document.querySelector('.menu-mobile');
    if (menu) {
      menu.classList.remove('block');
      menu.classList.add('hidden');
    }
  }
}
