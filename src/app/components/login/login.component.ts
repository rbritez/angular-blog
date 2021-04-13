import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  public pageTitle: string;
  public user: User;
  public status: string;
  public token: any;
  public identity: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.pageTitle = 'Identificate';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '', '');
   }

  ngOnInit(): void {
    // se ejecuta siempre y cierra sesion cuando le llega el parametro sure por la url
    this.logout();
  }
  onSubmit(form: any): any{
      this.userService.singup(this.user).subscribe(
        response => {
          // devuelve el token
          if (response.status !== 'error'){
            this.status = 'success';
            this.token = response;
            // persistir datos del usuario identificado
            localStorage.setItem('token', this.token);

            // Objeto usuario identifiado
            this.dataUser();
             // redirecciono
            this.router.navigate(['inicio']);
          }else{
            //respuesta con error
            this.notification('Datos Invalidos',response.message,'Intentar Nuevamente');
            console.log(response);
          }
        },
        error => {
          //error de endpoint
          this.status = 'error';
          this.notification('Problemas Internos','Intente nuevamente más tarde','OK');
          console.log(error);
        }
      );
  }
  logout(): any{
    this.route.params.subscribe(params => {
      const sure = 'sure';
      const logout = +params[sure];
      if (logout === 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;
        // redirecciono
        this.router.navigate(['inicio']);
      }
    });
  }
  private dataUser(): any {
    this.userService.singup(this.user, true).subscribe(
      response => {
        this.identity = response;
        // persistir datos del usuario identificado
        localStorage.setItem('identity', JSON.stringify(this.identity));
      },
      error => {

      }
    );
  }

  notification(titleText:any, text:any , btnText:any ){
    Swal.fire({
      title: titleText,
      text: text,
      icon: 'error',
      confirmButtonText: btnText
    })
  }


}
