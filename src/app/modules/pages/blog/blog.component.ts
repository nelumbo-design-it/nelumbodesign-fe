import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  public dataCards: any[] = [
    {id: '1', data: new Date(), title: 'Creative & smart business ideas', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-12.jpg', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '2', data: new Date(), title: 'Gaaga’s Email Marketing Campaigns', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-2.png', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '3', data: new Date(), title: 'Achieve your business goals', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-12.jpg', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '4', data: new Date(), title: 'Small ideas make great brands', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-2.png', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '5', data: new Date(), title: 'Creative & smart business ideas', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-12.jpg', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '6', data: new Date(), title: 'Gaaga’s Email Marketing Campaigns', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-2.png', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '7', data: new Date(), title: 'Achieve your business goals', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-12.jpg', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
    {id: '8', data: new Date(), title: 'Small ideas make great brands', image: 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Blog-Detail-Type-Img-2.png', description: 'Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id diam. Scelerisque varius morbi enim'},
  ]
}
