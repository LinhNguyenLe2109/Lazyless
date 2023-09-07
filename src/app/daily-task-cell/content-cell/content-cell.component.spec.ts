import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCellComponent } from './content-cell.component';

describe('ContentCellComponent', () => {
  let component: ContentCellComponent;
  let fixture: ComponentFixture<ContentCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCellComponent]
    });
    fixture = TestBed.createComponent(ContentCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
