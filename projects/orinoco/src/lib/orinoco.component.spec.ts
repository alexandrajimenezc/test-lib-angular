import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrinocoComponent } from './orinoco.component';

describe('OrinocoComponent', () => {
  let component: OrinocoComponent;
  let fixture: ComponentFixture<OrinocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrinocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrinocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
