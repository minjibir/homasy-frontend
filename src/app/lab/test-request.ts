export class TestRequest {

    // This (Consultation ID)can be used to find
    // consultation ID,
    // Appointment ID,
    // Patient ID,
    // Doctor ID,
    public consultationId: number;
    public patientId: number;
    public doctorId: number;

    public testRequestId: number;
    public testsRequested: string;
    public testResult: string;
    public tested: boolean;
    public dateTimeRequested: string;
}
