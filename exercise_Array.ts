//soal no 1

function trianglePattern(angka: number) {
  let nomor = 1; //buat variable utk menyimpan angka yg mau dicetak
  for (let i = 1; i <= angka; i++) {
    //looping utk baris
    let baris = ""; //variable utk menyimpan baris
    for (let j = 1; j <= i; j++) {
      //looping utk kolom atau menentukan berapa banyak angka yg mau dicetak
      if (nomor < 10) {
        //ngecek apakah angka kurang dari 10, kalo iya tambahin 0 di depan
        baris += "0" + nomor + " "; //nambahin angka ke dlm baris + string 0
      } else {
        baris += nomor + " "; //nambahin angka ke dlm baris tanpa string 0
      }
      nomor++; //utk increment agnka yg mau dicetak
    }
    console.log(baris); //cetak baris
  }
}

trianglePattern(4);

console.log("=====================================");

//soal no 2

function fizzBuzz(angka2: number) {
  for (let i = 1; i <= angka2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      //kondisi utk ngecek angka yg habis dibagi 3 dan 5 utk cetak fizzbuzz
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      //kondisi utk ngecek angka yg habis dibagi 3 utk cetak fizz
      console.log("Fizz");
    } else if (i % 5 === 0) {
      //kondisi utk ngecek angka yg habis dibagi 5 utk cetak buzz
      console.log("Buzz");
    } else {
      //kondisi yg tdk ketiganya utk cetak angka biasa
      console.log(i);
    }
  }
}
fizzBuzz(15);

console.log("=====================================");

//soal no 3

function BMIcalculator(weight: number, height: number) {
  const bmi: number = weight / (height * height); //logic bmi
  let category: string; //variabel utk menyimpan category
  switch (true) { //utk ngecek kondisi bmi
    case bmi > 0 && bmi < 18.5://ngecek kondisi bmi utk kategori
      console.log("less weight");//cetak hasil
      category = "less weight";//menyimpan kategori  ke variable category
      break; //berhenti apabila kondisi terpenuhi
    case bmi >= 18.5 && bmi < 25:
      console.log("ideal");
      category = "ideal";
      break;
      case bmi >= 25 && bmi < 30:
      console.log("overweight");
      category = "overweight";
      break;
      case bmi >= 30 && bmi < 40:
      console.log("very overweight");
      category = "very overweight";
      break;
      case bmi >= 40 :
      console.log("obesity");
      category = "obesity";
      break;
      default://ngecek kondisi bmi yg tdk valid
      console.log("masukkan angka yg valid");
      break;
  }
}

BMIcalculator(100, 1.8);

console.log("=====================================");


//soal no 4
function removeOddNumber(angka4: number):number[]{//buat function utk ngehapus angka ganjil
    const evenNumber: number[] = []//buat array utk menyimpan angka genap
    for(let i = 1; i<angka4; i++){//looping utk ngecek angka dari 1 sampe angka4
        if(i % 2 === 0){//ngecek apakah angka habis dibagi 2 atau tidak
            evenNumber.push(i);//kalo iya push ke dlm array evenNumber
        }
    }
    return evenNumber;//balikin array yg udh di push ke dlm evenNumber
};

console.log(removeOddNumber(10));

console.log("=====================================");

//soal no 5
function splitString(kata: string):string[]{ //buat function utk memisahkan string
   const hasil =  kata.split(" ") //buat variable utk menyimpan hasil split string, split string pake spasi
   return hasil;
};

console.log(splitString("Hello World"))