import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobaMainpageComponent } from './boba-mainpage.component';

describe('BobaMainpageComponent', () => {
  let component: BobaMainpageComponent;
  let fixture: ComponentFixture<BobaMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobaMainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobaMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
