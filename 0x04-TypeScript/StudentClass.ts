// Interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
  firstName: string;
  lastName: string;
}

// StudentClass implementation
class StudentClass implements StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

