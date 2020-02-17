import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateGradePage } from './update-grade.page';

describe('UpdateGradePage', () => {
  let component: UpdateGradePage;
  let fixture: ComponentFixture<UpdateGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGradePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
