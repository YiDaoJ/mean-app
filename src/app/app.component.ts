import { Component } from '@angular/core';
import { Post } from 'src/types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mean-app';

  savedPosts: Post[] = [];

  onPostCreated(post: Post) {
    this.savedPosts.push(post);
  }
}
