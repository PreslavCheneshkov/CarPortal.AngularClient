import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNavComponent } from './regular-nav.component';

describe('RegularNavComponent', () => {
  let component: RegularNavComponent;
  let fixture: ComponentFixture<RegularNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
