import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  loginProcess(): void {
    if (this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.success){
          localStorage.setItem('token', result.data);
          const url = localStorage.getItem('returnurl');
          this.router.navigateByUrl(url);
        }
      });
    }
  }
}
