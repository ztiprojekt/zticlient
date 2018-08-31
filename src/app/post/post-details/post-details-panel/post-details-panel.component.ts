import {Component, OnInit, OnChanges, Input, SimpleChange, OnDestroy} from '@angular/core';

import {Post} from '../../shared/post.model';
import {PostService} from "../../shared/post.service";
import {Subscription} from "rxjs/index";
import {Router} from "@angular/router";

@Component({
    selector: 'app-post-details-panel',
    templateUrl: './post-details-panel.component.html',
    styleUrls: ['./post-details-panel.component.css']
})
export class PostDetailsPanelComponent implements OnInit, OnChanges, OnDestroy {

    @Input() post: Post;
    sub: Subscription;

    constructor(private _postService: PostService, private _router: Router) {
    }

    ngOnInit() {
    }

    deletePost(postId) {
        this.sub = this._postService.deletePost(postId)
            .subscribe(
                (data) => {
                    this._router.navigate(['', 'post', 'list']);
                },
                (err) => {
                    console.log(err)
                }
            );
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {

         if (changes && changes['post'] && changes['post'].currentValue) {
           this.post = Object.assign({}, changes['post'].currentValue);
         }
         for (let propName in changes) {
           let chng = changes[propName];
           let cur = JSON.stringify(chng.currentValue);
           let prev = JSON.stringify(chng.previousValue);

           console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
         }
    }

    ngOnDestroy() {
        console.log('calling ngOnDestroy::PostListComponent');
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

}