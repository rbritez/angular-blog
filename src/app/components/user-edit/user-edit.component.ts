import { global } from './../../services/global.service';
import { UserService } from './../../services/user.service';
import { UserEdit } from './../../models/userEdit';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public pageTitle: string;
  public user: UserEdit;
  public status: string;
  public identity: any;
  public token: any;
  public url: any;
  public afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg, .jpeg, .png',
    maxSize: '50',
    uploadAPI: {
      url: global.url + 'user/upload',
      method: 'POST',
      headers: {
        Authorization : this.userService.getToken()
      }
    },
    theme: 'attachPin',
    hideResetBtn: true,
    hideProgressBar: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Seleccionar Imagen',
      attachPinBtn: 'Seleccionar Imagen',
      sizeLimit: 'Tamaño Máximo: '
    }
  };
  public resetVar: any;

  constructor(
    private userService: UserService
  ) {
    this.pageTitle = 'Ajustes de Usuario';
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.url = global.url;
    // cargo el formulario para editarlo.
    this.user = this.user = new UserEdit(this.identity.sub,
        this.identity.name,
        this.identity.surname,
        this.identity.role,
        this.identity.email,
        '',  // campos de password que no es necesario porque en la api no lo utiliza.
        this.identity.description,
        this.identity.image);

  }

  ngOnInit(): void {}

  onSubmit(form: any): any {
    this.userService.update(this.token, this.user).subscribe(
      response => {
        if ( response ){
          this.status = 'success';
          // actualizar el usuario en sesion y localstorage
          this.identity = response.changes;
          localStorage.setItem('identity', JSON.stringify(this.identity));
        }else{
          this.status = 'error';
        }

      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }
  imageUpload(event: any): any{
    // extraigo el nombre de la imagen de la variable event. y lo agrego al user.image.
    this.user.image = event.body.image;
  }
}
