import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update dataFromParent on calling sendDataToChild', () => {
    component.sendDataToChild();
    expect(component.dataFromParent).toBe('Data sent from Parent');
  });

  it('should update dataFromChild on calling receiveDataFromChild', () => {
    const testData = 'Test Child Data';
    component.receiveDataFromChild(testData);
    expect(component.dataFromChild).toBe(testData);
  });

});
