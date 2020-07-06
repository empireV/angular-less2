import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  showDetails(postId: number): void {
    this.userService.commentsOfPost(postId).subscribe(value => console.log(value));

  }
}
