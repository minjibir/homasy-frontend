export class TestResult {

 
    // This (Consultation ID)can be used to find
    // consultation ID,
    // Appointment ID,
    // Patient ID,
    // Doctor ID,
    public consultationId: number;
    public patientId: number;
    public doctorId: number;
    
    public testResultId: number;
    public testRequestId: number;
    public testsRequested: string;
    public dateTimeRecorded: string;
}
