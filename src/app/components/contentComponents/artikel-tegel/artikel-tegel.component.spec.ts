import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelTegelComponent } from './artikel-tegel.component';

describe('ArtikelTegelComponent', () => {
  let component: ArtikelTegelComponent;
  let fixture: ComponentFixture<ArtikelTegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtikelTegelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikelTegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
