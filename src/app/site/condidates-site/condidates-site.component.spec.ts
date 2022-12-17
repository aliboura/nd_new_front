import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidatesSiteComponent } from './condidates-site.component';

describe('CondidatesSiteComponent', () => {
  let component: CondidatesSiteComponent;
  let fixture: ComponentFixture<CondidatesSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondidatesSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondidatesSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
