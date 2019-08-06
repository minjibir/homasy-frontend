import { LabModule } from './lab.module';

describe('LabModule', () => {
  let labModule: LabModule;

  beforeEach(() => {
    labModule = new LabModule();
  });

  it('should create an instance', () => {
    expect(labModule).toBeTruthy();
  });
});
