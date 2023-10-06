import { global } from './../../services/global.service';
import { CategoryService } from './../../services/category.service';
import { UserService } from './../../services/user.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css'],
  providers: [UserService, CategoryService],
})
export class PostNewComponent implements OnInit {

  public pageTitle: string;
  public post: Post;
  public user: any;
  public status: string;
  public categories: any;
  public token: string;
  public froala_options:object;
  public afuConfig:object;
  public resetVar: any;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    // private route: ActivatedRoute,
    // private router: Router,
  ) {
    this.pageTitle = 'Crear nuevo Post';
    this.user = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.froala_options={
      charCounterCount:true,
      language: 'es',
      toolbarButtons:   ['bold','italic','underline','paragraphFormat','alert'],
      toolbarButtonsXS: ['bold','italic','underline','paragraphFormat','alert'],
      toolbarButtonsSM: ['bold','italic','underline','paragraphFormat','alert'],
      toolbarButtonsMD: ['bold','italic','underline','paragraphFormat','alert'],

    };
    this.afuConfig = {
      multiple: false,
      formatsAllowed: '.jpg, .jpeg, .png',
      maxSize: '50',
      uploadAPI: {
        url: global.url + 'post/upload',
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
  }

  ngOnInit(): void {
    this.post = new Post( 1, this.user.sub, 1, '', '', null, null );
    this.getCategories();
    // console.log(this.post);
  }
  getCategories():any{
    this.categoryService.getCategories().subscribe(
      Response =>{
        if(Response.status == 'success'){
          this.categories = Response.categories;
        }
      },
      error =>{
        console.log(error);
      }
    );
  }
  onSubmit(form: any): any{
    console.log();
  }

  imageUpload(event: any): any{
    // extraigo el nombre de la imagen de la variable event. y lo agrego al user.image.
    this.post.image = event.body.image;
  }

}
