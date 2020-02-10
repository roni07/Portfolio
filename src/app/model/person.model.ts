export class Person {
  public firstName: string;
  public lastName: string;
  public designation: string;
  public phone: string;
  public email: string;
  public skype: string;
  public address: string;
  public personDetails: string;

  constructor(person?) {
    person = person || {};
    this.firstName = person.firstName || null;
    this.lastName = person.lastName || null;
    this.designation = person.designation;
    this.phone = person.phone || null;
    this.email = person.email || null;
    this.skype = person.skype || null;
    this.address = person.address || null;
    this.personDetails = person.personDetails || null;
  }
}
