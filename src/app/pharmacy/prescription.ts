export class Prescription {
    // This (Consultation ID)can be used to find
    // Prescription ID,
    // Appointment ID,
    // Patient ID,
    // Doctor ID,
    public consultationId: number;
    public prescriptionId: number;
    public patientId: number;
    public doctorId: number;
    
    public prescriptionContent: string;
    public prescriptionStatus: boolean;
    public available: string;
    public prescriptionDateTime: string;
}
