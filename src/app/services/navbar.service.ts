import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  current: number = 0;

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (router.url === '/' || router.url === '/home') {
        this.current = 0;
      } else if (router.url === '/portfolio') {
        this.current = 1;
      } else {
        this.current = 2;
      }
    });
  }
}
