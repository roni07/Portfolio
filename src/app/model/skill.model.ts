export class Skill {
  public skillId: string;
  public skillName: string;
  public skillNumber: number;

  constructor(skill?) {
    skill = skill || {};
    this.skillId = skill.skillId || null;
    this.skillName = skill.skillName || null;
    this.skillNumber = skill.skillNumber || null;
  }
}
