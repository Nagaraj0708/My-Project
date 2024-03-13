import { Component } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  formData={FirstName:'',LastName:'',date:'',email:'',phone:'',password:''}
  submit=false;
  
 
 
  onSubmit() {   
    console.log(this.formData);    
  }
  
}

