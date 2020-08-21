import { global } from './services/global.service';
import { UserService } from './services/user.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Blog Angular';
  public identity: any;
  public token: any;
  public url: any;
  constructor(
    public userService: UserService
  ){
    this.loadUser();
    this.url = global.url;
  }

  ngOnInit(): any{
    console.log('webapp cargada correctamente');

  }
  ngDoCheck(): any{
    this.loadUser();
  }
  private loadUser(): any{
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }
}
