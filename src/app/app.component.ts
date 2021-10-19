import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  deafaultQuestion="pet";
  genders=['male','female'];
  user={
    username:'',
    email:'',
    secretQuestion:'',
    gender:''
  };

  formSubmitted=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //     username:suggestedName,
    //     email:'',
    //   secret:'pet',
    //   gender:'male'
    // })
    this.signupForm.form.patchValue({
      username:suggestedName
    })
  }

  // onSubmit(form:ElementRef){
  //   console.log(form);
    
  // }
  onSubmit()
  {
    this.formSubmitted=true;
    this.user.username=this.signupForm.value.username;
    this.user.email=this.signupForm.value.email;
    this.user.secretQuestion=this.signupForm.value.secret;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.form.reset();
    
  }
}
