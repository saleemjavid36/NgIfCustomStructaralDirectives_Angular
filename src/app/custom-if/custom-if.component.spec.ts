import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIfComponent } from './custom-if.component';

describe('CustomIfComponent', () => {
  let component: CustomIfComponent;
  let fixture: ComponentFixture<CustomIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
