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
  public category: any;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    // private route: ActivatedRoute,
    // private router: Router,
  ) {
    this.pageTitle = 'Crear nuevo Post';
    this.user = this.userService.getIdentity();
    this.category = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.post = new Post( 1, this.user.sub, 1, '', '', null, null );
    // console.log(this.post);
  }
  onSubmit(form: any): any{
    console.log();
  }

}
