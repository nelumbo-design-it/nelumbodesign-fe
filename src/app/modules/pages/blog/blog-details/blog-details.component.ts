import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BLOG_POST_INTERFACE } from 'src/app/shared/models/blog_post';
import { BLOG_POST } from 'src/assets/data/blog/blog-post';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  public blogPost: BLOG_POST_INTERFACE = {} as BLOG_POST_INTERFACE;

  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.filterBlogPosts();
  }

  private filterBlogPosts(): void {
    this.activatedRouter.params.subscribe((params: Params) => {
      console.log('res', params);
      const foundPost = BLOG_POST.find((post) => post.id === params['id']);
      if (foundPost) {
        this.blogPost = foundPost;
      } else {
        // Gestisci il caso in cui il post non viene trovato
        console.error('Post non trovato!');
        // Qui puoi aggiungere ulteriori azioni, come reindirizzare l'utente o mostrare un messaggio di errore.
      }
    })
  }

}
