import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarNoConformidadPage } from './editar-no-conformidad.page';

describe('EditarNoConformidadPage', () => {
  let component: EditarNoConformidadPage;
  let fixture: ComponentFixture<EditarNoConformidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNoConformidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarNoConformidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
