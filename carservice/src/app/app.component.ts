import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { filter } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SharedService } from './shared/services/shared.service';


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
    private sharedService: SharedService
  ){

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      this.sharedService.observeElementsForAnim();
    });
  }

}
