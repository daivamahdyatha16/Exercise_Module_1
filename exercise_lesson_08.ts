
// Soal 1: gabungin dua daftar student, terus simpan satu data aja untuk tiap email.
// Bentuk data student: tiap orang punya nama dan email.
type Student = {
  name: string;
  email: string;
};

// Balikin daftar student yang emailnya nggak duplikat.
function mergeArrays(array1: Student[], array2: Student[]): Student[] {
  // Tempat nampung hasil akhir yang sudah bersih dari duplikat.
  const arrayResult: Student[] = [];
  // Biar gampang ngecek email mana yang sudah pernah ketemu.
  const seenEmail: Set<string> = new Set();
  // Satukan dulu kedua daftar supaya bisa dicek dalam satu alur.
  const allStudent = [...array1, ...array2];

  // Cek student satu per satu.
  for (let i = 0; i < allStudent.length; i++) {
    // Kalau emailnya sudah ada, lewatin aja—nggak perlu masukin dua kali.
    if (seenEmail.has(allStudent[i].email)) {
        continue;
        } else {
            // Email baru? Catat, lalu masukin student-nya ke hasil.
            seenEmail.add(allStudent[i].email);
            arrayResult.push(allStudent[i]);
        }
  }
  // Kasih balik daftar yang sudah rapi.
  return arrayResult;
}

// Contoh dua daftar yang mau digabung.
const array1: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const array2: Student[] = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

// Tampilkan hasil gabungannya.
console.log(mergeArrays(array1, array2));

// Soal 2: tukar posisi key dan value dari data person.

// Data person punya nama dan umur.
type Person = {
  name: string;
  age: number;
}

// Hasil tukar key-value disimpan sebagai object dengan value berbentuk string.
type Swap = {
  [key: string]: string;}

// Proses semua person dan balikin versi key-value yang sudah ditukar.
function swapProperties(obj: Person[]): Swap[] {
  // Nampung hasil untuk semua person.
  const swappedArray: Swap[] = [];

  // Kerjain person satu per satu.
  for (let i = 0; i < obj.length; i++) {
    // Object baru untuk hasil tukar milik person yang sedang dicek.
    const swappedObj: Swap = {};
    // Ubah isi person jadi pasangan [key, value] biar gampang diproses.
    const entries = Object.entries(obj[i]);

    // Cek tiap pasangan key-value.
    for (let j = 0; j < entries.length; j++) {
      // Simpan key asli (misalnya "name") dan value-nya (misalnya "David").
      const property = entries[j][0];
      const value = entries[j][1];
      // Tukar posisinya: value jadi key, key lama jadi value.
      swappedObj[String(value)] = property;
    }

    // Masukin hasil person ini ke daftar hasil.
    swappedArray.push(swappedObj);
  }

  // Balikin semua hasil yang sudah ditukar.
  return swappedArray;
}

// Contoh data person yang mau diproses.
const people: Person[] = [{ name: "David", age: 20 }];

// Tampilkan hasil tukar key-value.
console.log(swapProperties(people));

// Soal 3: hitung faktorial dengan cara fungsi memanggil dirinya sendiri.
function countFactorial (num: number): number {
  // Sampai 0 atau 1? Berhenti di sini, karena faktorial keduanya adalah 1.
  if (num === 0 || num === 1) {
    return 1;
  }

  // Kalikan angka sekarang dengan faktorial angka sebelumnya.
  // result nyimpen hasil sementara sebelum dikasih balik.
  const result = num * countFactorial(num - 1);
  return result; 
}

// Coba hitung 5!, lalu tampilkan hasilnya di console.
console.log(countFactorial(5)); 