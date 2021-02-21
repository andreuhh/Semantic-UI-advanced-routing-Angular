import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModshomeComponent } from './modshome.component';

describe('ModshomeComponent', () => {
  let component: ModshomeComponent;
  let fixture: ComponentFixture<ModshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
