import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) {}

  isAuthenticated():boolean{
    if(sessionStorage.getItem('Nagaraj')!==null)
    {
      return false;
    }
    return true;
    ;
  }

  couldAccess(){
    if (!this.isAuthenticated()){
      this.router.navigate(['/login']);
    }
  }
}
