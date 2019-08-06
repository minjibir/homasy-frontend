import { ConsultationModule } from './consultation.module';

describe('ConsultationModule', () => {
  let consultationModule: ConsultationModule;

  beforeEach(() => {
    consultationModule = new ConsultationModule();
  });

  it('should create an instance', () => {
    expect(consultationModule).toBeTruthy();
  });
});
