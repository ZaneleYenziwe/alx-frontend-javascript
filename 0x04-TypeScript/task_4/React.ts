
namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject {
    public getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher(): string {
      if (this.teacher and this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}

