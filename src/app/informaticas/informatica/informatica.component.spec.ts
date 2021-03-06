import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticaComponent } from './informatica.component';

describe('InformaticaComponent', () => {
  let component: InformaticaComponent;
  let fixture: ComponentFixture<InformaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
