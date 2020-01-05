import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedNewsPage } from './saved-news.page';

describe('SavedNewsPage', () => {
  let component: SavedNewsPage;
  let fixture: ComponentFixture<SavedNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
