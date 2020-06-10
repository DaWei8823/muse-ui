import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromptDialogComponent } from './create-prompt-dialog.component';

describe('CreatePromptDialogComponent', () => {
  let component: CreatePromptDialogComponent;
  let fixture: ComponentFixture<CreatePromptDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePromptDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePromptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
