import { CategoryService } from './../../services/category.service';
import { Category } from '../../models/category';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-category-new',
  templateUrl: 'categoryNew.component.html',
  styleUrls: ['./categoryNew.component.css'],
  providers: [UserService, CategoryService]
})
export class CategoryNewComponent implements OnInit {

  public pageTitle: string;
  public identity: any;
  public token: any;
  public category: Category; // obtiene caracteristicas del modelo category
  public status: string;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
  ) {
    this.pageTitle = 'Crear nueva Categoria';
    this.token = this.userService.getToken();
    this.category = new Category(1, ''); // cargo los datos del formulario
  }

  ngOnInit(): void {
  }
  onSubmit(form: any): any{

    this.categoryService.save(this.token, this.category).subscribe(
      response => {
        if (response.status === 'success'){
          this.status = 'success';
          form.reset();
        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }
}
