interface MajorCredits {
  brand: 'Major';
  credits: number;
}

interface MinorCredits {
  brand: 'Minor';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { brand: 'Major', credits: subject1.credits + subject2.credits };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { brand: 'Minor', credits: subject1.credits + subject2.credits };
}

// Test the functions
const majorSubject1: MajorCredits = { brand: 'Major', credits: 10 };
const majorSubject2: MajorCredits = { brand: 'Major', credits: 20 };
const minorSubject1: MinorCredits = { brand: 'Minor', credits: 5 };
const minorSubject2: MinorCredits = { brand: 'Minor', credits: 15 };

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // { brand: 'Major', credits: 30 }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // { brand: 'Minor', credits: 20 }



