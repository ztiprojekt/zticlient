import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {
  post: Post = { title: '', content: '' };
  sub: Subscription;

  constructor( private router: Router) { }

  onPostSaved(event) {
    if (event) {
      this.router.navigate(['', 'post']);
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
