import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { filter } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, RouterModule,FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'carservice';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ){

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      this.observeElementsForAnim();
    });
  }
  
  
  private observeElementsForAnim(){
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window))
      return;

    const inViewport = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("anim-target--active");
          Obs.unobserve(entry.target);
        }
      });
    };
    const Obs = new IntersectionObserver(inViewport, {
      threshold: 0.1
    });
    document.querySelectorAll('.anim-target').forEach(el => {
      Obs.observe(el);
    });
  }

}
