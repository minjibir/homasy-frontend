import { NurseModule } from './nurse.module';

describe('NurseModule', () => {
  let nurseModule: NurseModule;

  beforeEach(() => {
    nurseModule = new NurseModule();
  });

  it('should create an instance', () => {
    expect(nurseModule).toBeTruthy();
  });
});
