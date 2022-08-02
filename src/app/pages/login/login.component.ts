import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordHiden: boolean = true
  formLogin!: UntypedFormGroup;

  erro:string = '';

  constructor(private formBuilder: UntypedFormBuilder,
              private userService: UserService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.criarForm();
  }

  login(){
    if(this.formLogin.invalid) return;

    var user = this.formLogin.getRawValue() as User;
    this.userService.login(user).subscribe((response) => {
      this.dialogRef.close()
    },err =>   this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
      duration: 3000
    }))
  }

  criarForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  teste(){
    localStorage.setItem('teste', 'teste')
  }
}
