// SOAL 1
function convertExcel(columnTitle: string): number {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // nyimpen hasil sementara, dihitung dalam basis 26
    let tempResult = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        const letter = columnTitle[i];
        const letterValue = alphabet.indexOf(letter) + 1;
        tempResult = tempResult * 26 + letterValue;
    }
    return tempResult;
};

console.log(convertExcel("BA")); 

//SOAL 2
function singleOne(arr: number[]): number {
    // nyimpen angka yg cuma muncul sekali
    let tempResult = 0;
    for (let i = 0; i < arr.length; i++) {
        // bandingin posisi kemunculan pertama dan terakhir
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            tempResult = arr[i];
            break;
        }
    }
    return tempResult;
}

console.log(singleOne([1, 2, 3, 2, 1]));

//soal no 3
function checkAnagram(str1: string, str2: string): boolean {
    // panjang beda berarti bukan anagram
    if (str1.length !== str2.length) {
        return false;
    }
    // cek tiap huruf str1 ada di str2 (jumlah hurufnya belum dicek)
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log(checkAnagram("cataaaaaaa", "cat"));

//soal no 4

function anakTangga (n: number): number {
    if (n <= 2) return n;

    // jumlah cara untuk 1 dan 2 anak tangga
    let satuTangga = 1;
    let duaTangga = 2;

    // cara ke n = jumlah cara ke n-1 dan n-2
    for (let step = 3; step <= n; step++) {
        const currentWays = satuTangga + duaTangga;
        satuTangga = duaTangga;
        duaTangga = currentWays;
    }
    return duaTangga;
}
console.log(anakTangga(3));

//SOAL 5
function majorityElement(arr: number[]): number {
    // candidate nyimpen calon angka yg paling sering muncul
    let candidate: number = arr[0];
    // count bantu menentukan calon berikutnya
    let count: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
        }
        // angka sama nambah count, beda angka ngurangin
        if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

console.log(majorityElement([2,2,1,1,1,2,2]));

//soal no 6
function convertRoman(romanNums: string): number {
    const I: number = 1;
    const V: number = 5;
    const X: number = 10;
    const L: number = 50;
    const C: number = 100;
    const D: number = 500;
    const M: number = 1000;
    // nyimpen hasil konversi
    let tempResult = 0;
    for (let i = 0; i < romanNums.length; i++) {
        const current = romanNums[i];
        const next = romanNums[i + 1];
        // pasangan khusus dihitung sekaligus; selain itu cek nilai simbolnya
        if (current === "I" && next === "V") {
            tempResult += 4;
            i++;
        } else if (current === "I" && next === "X") {
            tempResult += 9;
            i++;
        } else if (current === "X" && next === "L") {
            tempResult += 40;
            i++;
        } else if (current === "X" && next === "C") {
            tempResult += 90;
            i++;
        } else if (current === "C" && next === "D") {
            tempResult += 400;
            i++;
        } else if (current === "C" && next === "M") {
            tempResult += 900;
            i++;
        } else if (current === "V") {
            tempResult += 5;
        } else if (current === "L") {
            tempResult += 50;
        } else if (current === "D") {
            tempResult += 500;
        } else if (current === "M") {
            tempResult += 1000;
        } else {
            // kondisi lainnya ditambah 1
            tempResult += 1;
        }
    }
    return tempResult;
};

console.log(convertRoman("MCMXCIV")); 

//soal no 7
function pascalTriangle(numRows: number): number[][] {
    // nyimpen semua baris segitiga
    const triangle: number[][] = [];
    // bikin baris satu per satu
    for (let i = 0; i < numRows; i++) {
        triangle[i] = [];
        // angka pertama dan terakhir tiap baris selalu 1
        triangle[i][0] = 1;
        // angka tengah dijumlah dari dua angka di baris sebelumnya
        for (let j = 1; j < i; j++){
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle[i][i] = 1;
    }
    return triangle;
}           

const result = pascalTriangle(5);
// tambahin spasi biar bentuknya keliatan kayak segitiga
for (let i = 0; i < result.length; i++) {
    const spaces = " ".repeat(result.length - i - 1);
    console.log(spaces + result[i].join(" "));
}

//soal no 8
function maxProfit(prices: number[]): number {
    // nyimpen profit paling gede, mulai dari 0
    let bestProfit = 0;

    // pilih hari beli, lalu coba jual di hari-hari setelahnya
    for (let buyDay = 0; buyDay < prices.length; buyDay++) {
        for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
            const profit = prices[sellDay] - prices[buyDay];
            // update kalau profit ini lebih gede
            if (profit > bestProfit) {
                bestProfit = profit;
            }
        }
    }

    return bestProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
console.log(maxProfit([7, 6, 4, 3, 1])); 