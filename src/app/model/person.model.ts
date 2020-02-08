export class Person {
  public firstName: string;
  public lastName: string;
  public designation: string;
  public phone: string;
  public email: string;
  public address: string;

  constructor(person?) {
    person = person || {};
    this.firstName = person.firstName || null;
    this.lastName = person.lastName || null;
    this.designation = person.designation;
    this.phone = person.phone || null;
    this.email = person.email || null;
    this.address = person.address || null;
  }
}
