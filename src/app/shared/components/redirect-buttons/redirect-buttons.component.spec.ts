import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectButtonsComponent } from './redirect-buttons.component';

describe('RedirectButtonsComponent', () => {
  let component: RedirectButtonsComponent;
  let fixture: ComponentFixture<RedirectButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
