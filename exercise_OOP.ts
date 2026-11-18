// 1.Create function to calculate array of student data

interface Student {	//membuat interface Student untuk mendefinisikan tipe data dari objek student
  name: string;
  email: string;
  age: Date;
  score: number;
}

interface StudentStatistics { //membuat interface untuk mendefinisikan tipe data dari objek student statistics
  highest: number;
  lowest: number;
  average: number;
}

function calculateStudentStatistics(allStudents: Student[]): { //membuat function  untuk menghitung statistik dari data student
  score: StudentStatistics;
  age: StudentStatistics;
} {
  const allScores: number[] = allStudents.map( //mengambil semua nilai score dari setiap student
    (currentStudent) => currentStudent.score,
  );
  const allAges: number[] = allStudents.map( //mengambil semua nilai age dari setiap student
    (currentStudent: Student) =>
      new Date().getFullYear() - currentStudent.age.getFullYear(), //method utk menghitung umur dari setiap student dengan mengurangi tahun saat ini dengan tahun lahir student
  );
  return { //mengembalikan objek yang berisi statistik dari score dan age
    score: {
      highest: Math.max(...allScores),
      lowest: Math.min(...allScores),
      // rumus rata-rata: jumlah semua nilai dibagi dengan jumlah data
      average: allScores.reduce((acc, n) => acc + n, 0) / allScores.length,
    },
    age: {
      highest: Math.max(...allAges),
      lowest: Math.min(...allAges),
      // rumus rata-rata: jumlah semua nilai dibagi dengan jumlah data
      average: Math.floor(
        allAges.reduce((acc, n) => acc + n, 0) / allAges.length,
      ),
    },
  };
}

const studentsData: Student[] = [
  {
    name: "Andi Pratama",
    email: "andi.pratama@example.com",
    age: new Date("2003-04-12"),
    score: 88,
  },
  {
    name: "Siti Rahmawati",
    email: "siti.rahmawati@example.com",
    age: new Date("2004-08-25"),
    score: 95,
  },
  {
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    age: new Date("2002-11-07"),
    score: 76,
  },
  {
    name: "Nadia Putri",
    email: "nadia.putri@example.com",
    age: new Date("2003-01-19"),
    score: 82,
  },
  {
    name: "Rizky Ramadhan",
    email: "rizky.ramadhan@example.com",
    age: new Date("2004-06-30"),
    score: 91,
  },
];

console.log(calculateStudentStatistics(studentsData));

// 2. Create a program to create transaction

// Perhatikan bahwa class bisa menjadi tipe dari sebuah objek juga

class Product { //membuat class Product untuk mendefinisikan tipe data dari objek product
  name: string;
  price: number;

  constructor(name: string, price: number) { //membuat constructor untuk menginisialisasi nilai dari properti name dan price
    this.name = name;
    this.price = price;
  }

  
}

interface CartItem { //membuat interface CartItem untuk mendefinisikan tipe data dari objek cart item
  item: Product;
  quantity: number;
}

class Transaction { //membuat class Transaction untuk mendefinisikan tipe data dari objek transaction
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  addToCart(itemToAdd: Product, quantityToAdd: number) { //membuat method addToCart untuk menambahkan item ke dalam cart
    this.cartItems.push({ item: itemToAdd, quantity: quantityToAdd });
    this.totalAmount += itemToAdd.price * quantityToAdd;
  }

  showTotal() {
	console.log(`Total belanja: Rp. ${this.totalAmount}`);
  }

  checkout() {
    return {
		cartItems: this.cartItems,
		totalAmount: this.totalAmount,
	};
  }
}

const book = new Product("Buku", 10000);
const pencil = new Product("Pensil", 5000);

const myTransaction = new Transaction();

myTransaction.addToCart(book, 2);
myTransaction.addToCart(pencil, 3);

myTransaction.showTotal();
console.log(myTransaction.checkout());