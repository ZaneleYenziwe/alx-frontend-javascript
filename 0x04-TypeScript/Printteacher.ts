interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith


