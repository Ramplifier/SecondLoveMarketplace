import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelpageComponent } from './artikelpage.component';

describe('ArtikelpageComponent', () => {
  let component: ArtikelpageComponent;
  let fixture: ComponentFixture<ArtikelpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
