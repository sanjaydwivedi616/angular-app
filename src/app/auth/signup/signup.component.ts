import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  conError = "";
  onSignup(form: NgForm) {
   let pass =  form.value.password;
    let conpass = form.value.conpassword;
    if(pass !== conpass){
      //this.conError = "password is not matching";
      return
    }
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.fname,
      form.value.lname, form.value.mobile,form.value.password, form.value.conpassword);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
