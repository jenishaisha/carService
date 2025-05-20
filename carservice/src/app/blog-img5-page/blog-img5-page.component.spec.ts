import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImg5PageComponent } from './blog-img5-page.component';

describe('BlogImg5PageComponent', () => {
  let component: BlogImg5PageComponent;
  let fixture: ComponentFixture<BlogImg5PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImg5PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogImg5PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
