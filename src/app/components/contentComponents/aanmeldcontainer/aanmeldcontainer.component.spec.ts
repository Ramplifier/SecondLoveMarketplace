import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AanmeldcontainerComponent } from './aanmeldcontainer.component';

describe('AanmeldcontainerComponent', () => {
  let component: AanmeldcontainerComponent;
  let fixture: ComponentFixture<AanmeldcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AanmeldcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AanmeldcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
