import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  public observeElementsForAnim(){
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
      threshold: 0.01
    });
    document.querySelectorAll('.anim-target').forEach(el => {
      Obs.observe(el);
    });
  }
}
