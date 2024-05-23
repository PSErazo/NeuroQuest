import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMemoryComponent } from './visual-memory.component';

describe('VisualMemoryComponent', () => {
  let component: VisualMemoryComponent;
  let fixture: ComponentFixture<VisualMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualMemoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
