import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImg2PageComponent } from './blog-img2-page.component';

describe('BlogImg2PageComponent', () => {
  let component: BlogImg2PageComponent;
  let fixture: ComponentFixture<BlogImg2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImg2PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogImg2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
