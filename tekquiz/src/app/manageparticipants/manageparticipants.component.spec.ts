import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageparticipantsComponent } from './manageparticipants.component';

describe('ManageparticipantsComponent', () => {
  let component: ManageparticipantsComponent;
  let fixture: ComponentFixture<ManageparticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageparticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageparticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
