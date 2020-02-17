import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddGradePage } from './add-grade.page';

describe('AddGradePage', () => {
  let component: AddGradePage;
  let fixture: ComponentFixture<AddGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
