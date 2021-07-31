import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  confirmPasswrd: '';
  formGroup: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  submit(): void {
    if (this.formGroup.valid)
    {
      this.authService.register(this.formGroup.value)
        .subscribe(() => this.router.navigate(['/login']));
    }
  }
}
