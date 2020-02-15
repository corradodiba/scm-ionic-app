import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSubjectPage } from './add-subject.page';

describe('AddSubjectPage', () => {
  let component: AddSubjectPage;
  let fixture: ComponentFixture<AddSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubjectPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
