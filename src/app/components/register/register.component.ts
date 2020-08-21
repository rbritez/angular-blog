import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public pageTitle: string;
  public user: User;
  public status: string;
  constructor(
    private userService: UserService
  ) {
    this.pageTitle = 'Registrate';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '', '');
  }

  ngOnInit(): void {
    console.log('componente de registro usandose');
  }
  onSubmit( form: any ): any {

    this.userService.register(this.user).subscribe(
      response => {
        if (response.status === 'success'){
          this.status = response.status;

          form.reset();
        }else{
          this.status = 'error';
        }
      },
      error => {

        if (error.error.errors.email){
          this.status = 'error.email';
        }else{
          this.status = 'error';
        }
      }
    );


  }

}
