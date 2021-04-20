import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  public pageTitle:string;
  public categories: any;
  public status:string;

  constructor(
    private categoryService: CategoryService,
  ) {

    this.pageTitle = 'Lista de Categorías';
   }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): any{
    this.categoryService.getCategories().subscribe(
      response => {
        if (response.status){
          this.categories = response.categories;
          console.log(response);
        }
      },
      error => {
        this.status = 'error';
      }
    );
  }
}
