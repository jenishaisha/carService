import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogImg4PageComponent } from './blog-img4-page.component';

describe('BlogImg4PageComponent', () => {
  let component: BlogImg4PageComponent;
  let fixture: ComponentFixture<BlogImg4PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogImg4PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogImg4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
