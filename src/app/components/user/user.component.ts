import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  showDetails(id: number): void {
    this.userService.postsOfSingleUser(id).subscribe(value => console.log(value));
  }
}
