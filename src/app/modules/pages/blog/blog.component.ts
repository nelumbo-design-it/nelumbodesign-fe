import { Component } from '@angular/core';
import { BLOG_POST } from 'src/assets/data/blog/blog-post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public dataCards: any[] = BLOG_POST;
}
