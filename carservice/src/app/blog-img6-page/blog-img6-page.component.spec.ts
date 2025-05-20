import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImg6PageComponent } from './blog-img6-page.component';

describe('BlogImg6PageComponent', () => {
  let component: BlogImg6PageComponent;
  let fixture: ComponentFixture<BlogImg6PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImg6PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogImg6PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
