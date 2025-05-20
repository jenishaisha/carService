import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(
    private sharedService: SharedService
  ){

  }
  public blogContents = [
    {
      link:"/blog_img1",
      image: "assets/blog-img1.webp",
      title: "5 Technical Tips to Improve Your Car’s Mileage",
      description: "Learn 5 essential technical tips to enhance your car’s fuel efficiency. Save money and reduce emissions with these expert-approved strategies.",
      author: "Vijay R",
      createdDate: "7/28/2024",
      readingTime: "2 min read"
    },
    {
      link:"/blog_img2",
      image: "assets/blog-img2.webp",
      title: "7 Essential Car Periodic Maintenance Service",
      description: "Avoid costly repairs with regular car periodic maintenance service. Schedule today!",
      author: "Vijay R",
      createdDate: "7/28/2024",
      readingTime: "1 min read"
    },
    {
      link:"/blog_img3",
      image: "assets/blog-img3.webp",
      title: "How to Prepare Your Car for Winter: Tips for Safe Driving in winter",
      description: "Prepare your car for winter at KRSA AutoCare. Our expert mechanics ensure your engine, tires, battery, and brakes are ready for safe winter driving..",
      author: "Vijay R",
      createdDate: "7/28/2024",
      readingTime: "21 min read"
    },
    {
      link:"/blog_img4",
      image: "assets/blog-img4.webp",
      title: "How Can I Make My Car Tyres Last Longer?",
      description: "Discover how to maintain your car tyres with simple tips on checking pressure, alignment, rotation, and proper storage to ensure safety and extend their life.",
      author: "Vijay R",
      createdDate: "7/28/2024",
      readingTime: "3 min read"
    },
    {
      link:"/blog_img5",
      image: "assets/blog-img5.webp",
      title: "Why Changing Your Car Oil change Is Important",
      description: "Learn why regular oil changes are crucial for a healthy engine. Visit KRSA AutoCare for expert oil change services and keep your engine running smoothly.",
      author: "Vijay R",
      createdDate: "7/28/2024",
      readingTime: "2 min read"
    },
    {
      image: "assets/blog-img6.webp",
      title: "Your blog post",
      description: "Blog post description.",
      author: "Vijay R",
      createdDate: "7/28/2024",
      readingTime: "1 min read"
    }
  ];
  public displayDate:any = [...this.blogContents];

  public setPageDate(data:any[]){
    this.displayDate = data;
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(()=>{
      this.sharedService.observeElementsForAnim()
    }, 400);
  }
}
