import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  
  userLogin: FormGroup;
  submitted = false;

  isLoading = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
      this.userLogin = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(4)]]
      })
  }

  get f() { return this.userLogin.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.userLogin.invalid) {
          return;
      }
     if (this.userLogin.invalid) {
        return;
      }
      this.isLoading = true;
      this.authService.login(this.userLogin.value.email, this.userLogin.value.password); 
  }

  onReset() {
      this.submitted = false;
      this.userLogin.reset();
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
