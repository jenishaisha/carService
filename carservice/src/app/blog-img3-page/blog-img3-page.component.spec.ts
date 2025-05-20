import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImg3PageComponent } from './blog-img3-page.component';

describe('BlogImg3PageComponent', () => {
  let component: BlogImg3PageComponent;
  let fixture: ComponentFixture<BlogImg3PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImg3PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogImg3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
