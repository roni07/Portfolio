export class Experience {
  public experienceId: string;
  public experienceTimePeriodFrom: string;
  public experienceTimePeriodTo: string;
  public designation: string;
  public instituteName: string;
  public experienceDescription: string;


  constructor(experience) {
    experience = experience || {};
    this.experienceId = experience.experienceId || null;
    this.experienceTimePeriodFrom = experience.experienceTimePeriodFrom || null;
    this.experienceTimePeriodTo = experience.experienceTimePeriodTo || null;
    this.designation = experience.designation || null;
    this.instituteName = experience.instituteName || null;
    this.experienceDescription = experience.experienceDescription || null;
  }
}
