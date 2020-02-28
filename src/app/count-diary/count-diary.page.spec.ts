import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountDiaryPage } from './count-diary.page';

describe('CountDiaryPage', () => {
  let component: CountDiaryPage;
  let fixture: ComponentFixture<CountDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDiaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
