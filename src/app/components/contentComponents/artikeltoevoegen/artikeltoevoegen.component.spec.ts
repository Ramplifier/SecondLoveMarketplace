import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikeltoevoegenComponent } from './artikeltoevoegen.component';

describe('ArtikeltoevoegenComponent', () => {
  let component: ArtikeltoevoegenComponent;
  let fixture: ComponentFixture<ArtikeltoevoegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikeltoevoegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikeltoevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
