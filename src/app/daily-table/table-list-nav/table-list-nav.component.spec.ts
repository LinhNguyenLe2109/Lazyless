import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListNavComponent } from './table-list-nav.component';

describe('TableListNavComponent', () => {
  let component: TableListNavComponent;
  let fixture: ComponentFixture<TableListNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListNavComponent]
    });
    fixture = TestBed.createComponent(TableListNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
