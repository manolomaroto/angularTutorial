import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDentroModuloComponent } from './componente-dentro-modulo.component';

describe('ComponenteDentroModuloComponent', () => {
  let component: ComponenteDentroModuloComponent;
  let fixture: ComponentFixture<ComponenteDentroModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteDentroModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDentroModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
