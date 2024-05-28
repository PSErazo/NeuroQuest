import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesComponent } from './lifes.component';

describe('LifesComponent', () => {
  let component: LifesComponent;
  let fixture: ComponentFixture<LifesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
