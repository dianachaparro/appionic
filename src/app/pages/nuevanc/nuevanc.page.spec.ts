import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevancPage } from './nuevanc.page';

describe('NuevancPage', () => {
  let component: NuevancPage;
  let fixture: ComponentFixture<NuevancPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevancPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevancPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
