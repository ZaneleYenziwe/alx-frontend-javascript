namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    public getAvailableTeacher(): string {
      if (this.teacher amd and  this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

