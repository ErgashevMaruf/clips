import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidator } from '../validators/register-validator';
import { EmailTaken } from '../validators/email-taken';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AuthService, private emailTaken: EmailTaken) {

  }
  isSubmission = false;
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ], [this.emailTaken.validate])
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120)
  ])
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
  confirm_password = new FormControl('', [Validators.required])
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ])
  register = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password,
    phoneNumber: this.phoneNumber,
    age: this.age,
  }, [RegisterValidator.match('password', 'confirm_password')])
  showAlert = false;
  alertColor = 'blue';
  alertMsg = 'Waiting for submittion'
  async registerForm() {
    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Waiting for submittion';
    this.isSubmission = true;
    try {
      this.auth.createUser(this.register.value as IUser)
    }
    catch (e) {
      console.error(e);
      this.alertMsg = 'Your connection failed';
      this.alertColor = 'red'
      this.isSubmission = false;
      return
    }
    this.alertMsg = 'Your account created';
    this.alertColor = 'green';
  }
}
