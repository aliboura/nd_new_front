import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoOverviewComponent } from './techno-overview.component';

describe('TechnoOverviewComponent', () => {
  let component: TechnoOverviewComponent;
  let fixture: ComponentFixture<TechnoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
