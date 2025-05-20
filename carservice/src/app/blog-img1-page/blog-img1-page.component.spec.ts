import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImg1PageComponent } from './blog-img1-page.component';

describe('BlogImg1PageComponent', () => {
  let component: BlogImg1PageComponent;
  let fixture: ComponentFixture<BlogImg1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImg1PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogImg1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
