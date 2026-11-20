
//soal 1
type Student = {
  name: string;
  email: string;
};

function mergeArrays(array1: Student[], array2: Student[]): Student[] {
  const arrayResult: Student[] = [];
  const seenEmail: Set<string> = new Set();
  const allStudent = [...array1, ...array2];

  for (let i = 0; i < allStudent.length; i++) {
    if (seenEmail.has(allStudent[i].email)) {
        continue;
        } else {
            seenEmail.add(allStudent[i].email);
            arrayResult.push(allStudent[i]);
        }
  }
  return arrayResult;
}

const array1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const array2: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

console.log(mergeArrays(array1, array2));

//soal 2

type Person = {
  name: string;
  age: number;
}

type Swap = {
  [key: string]: string;}

function swapProperties(obj: Person[]): Swap[] {
  const swappedArray: Swap[] = [];

  for (let i = 0; i < obj.length; i++) {
    const swappedObj: Swap = {};
    const entries = Object.entries(obj[i]);

    for (let j = 0; j < entries.length; j++) {
      const property = entries[j][0];
      const value = entries[j][1];
      swappedObj[String(value)] = property;
    }

    swappedArray.push(swappedObj);
  }

  return swappedArray;
}

const people: Person[] = [{ name: "David", age: 20 }];

console.log(swapProperties(people));