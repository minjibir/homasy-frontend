import { EntranceModule } from './entrance.module';

describe('EntranceModule', () => {
  let entranceModule: EntranceModule;

  beforeEach(() => {
    entranceModule = new EntranceModule();
  });

  it('should create an instance', () => {
    expect(entranceModule).toBeTruthy();
  });
});
