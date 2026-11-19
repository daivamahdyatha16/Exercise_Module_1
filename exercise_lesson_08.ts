
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