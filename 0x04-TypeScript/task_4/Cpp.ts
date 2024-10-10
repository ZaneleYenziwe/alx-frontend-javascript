namespace Subjects {
  interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher(): string {
      if (this.teacher and  this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

