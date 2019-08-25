import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesMakerComponent } from './articles-maker.component';

describe('ArticlesMakerComponent', () => {
  let component: ArticlesMakerComponent;
  let fixture: ComponentFixture<ArticlesMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
