import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: any;
  invalid: boolean = false;
  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  send() {
    
    console.log(this.formLogin.value, 'user')
    const {email, password} = this.formLogin.value;
    const verify = this._auth.login(email,password);
    console.log(verify)
    if(verify) {
      this.router.navigate(['/home']);
    }else{
      this.invalid = true;
      setTimeout(()=>this.invalid = false,5000)
    }
  
  }

  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }
}
