import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLogNavComponent } from './table-log-nav.component';

describe('TableLogNavComponent', () => {
  let component: TableLogNavComponent;
  let fixture: ComponentFixture<TableLogNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableLogNavComponent]
    });
    fixture = TestBed.createComponent(TableLogNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
