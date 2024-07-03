import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitantesComponent } from './listar-solicitantes.component';

describe('ListarSolicitantesComponent', () => {
  let component: ListarSolicitantesComponent;
  let fixture: ComponentFixture<ListarSolicitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSolicitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSolicitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
