import { Component } from '@angular/core';
import {UserService} from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-azurian';
  users :{} = []

  constructor(
    protected userService: UserService
  ) {

}

ngOnInit() {
  this.userService.getUsers()
  

  .subscribe(
    (data) => { // Success
      this.users = data;
      console.log(this.users);
      console.log(this.users);
    },
    (error) => {
      console.error(error);
    }
  );
}


}
