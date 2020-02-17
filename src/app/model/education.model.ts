export class Education {
  public educationId: string;
  public educationTimePeriodFrom: string;
  public educationTimePeriodTo: string;
  public degreeTitle: string;
  public instituteName: string;
  public educationDescription: string;

  constructor(education?) {
    education = education || {};
    this.educationId = education.educationId || null;
    this.educationTimePeriodFrom = education.educationTimePeriodFrom || null;
    this.educationTimePeriodTo = education.educationTimePeriodTo || null;
    this.degreeTitle = education.degreeTitle || null;
    this.instituteName = education.instituteName || null;
    this.educationDescription = education.educationDescription || null;
  }
}
