import { CategoryService } from './services/category.service';
import { global } from './services/global.service';
import { UserService } from './services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CategoryService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Blog Angular';
  public identity: any;
  public token: any;
  public url: any;
  public categories: any;
  public status: string;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
  ){
    this.loadUser();
    this.url = global.url;
  }

  ngOnInit(): any{
    console.log('webapp cargada correctamente');
    this.getCategories();

  }
  ngDoCheck(): any{
    this.loadUser();
  }
  private loadUser(): any{
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
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
