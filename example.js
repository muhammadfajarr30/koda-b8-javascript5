// 1. concat(): untuk menggabungkan 2 atau lebih  array
const angka1 = [1, 3, 5, 7, 9];
const angka2 = [2, 4, 6, 8, 10];
const angka3 = angka1.concat(angka2);
console.log(angka3);

//2. join(): mengubah isi array menjadi string baru dan dapat menbahkan pemisah baru
const starkFamily = [
  "Robb Stark",
  "Jon Snow",
  "Theon Greyjoy",
  "Sansa Stark",
  "Arya Stark",
];
const stark = starkFamily.join(", ");
console.log(stark);

//3. forEach(): untuk melakukan perulangan pada seluruh isi array
const n = [1, 4, 5, 6, 7, 8];
n.forEach((isi) => console.log(isi));

//4. indexOf(): untuk mengembalikan  index di dalam array
const fruits = ["mangga", "anggur", "pisang", "jambu"];
const indexFruits = fruits.indexOf("anggur");
console.log(indexFruits);

//5. push(): digunakan untuk menambahkan elemen ke dalam baris akhir array
const lannisters = ["Jaime", "Cersei", "Tywin", "Joffery"];
lannisters.push("mamat");
console.log(lannisters);

//6. pop(): digunakan untuk menghapus elemen di akhir baris array
const nama = ["jaki", "wahyu", "dimas", "muftin"];
nama.pop();
console.log(nama);

//7. unshift(): digunakan untuk menambahkan elemen di awal baris array
const ikan = ["ikan paus", "ikan hiu", "ikan tongkol"];
ikan.unshift("ikan sapu-sapu");
console.log(ikan);

//8. shift(): digunakan untuk menghilangkan elemen di awal baris array
const merkMobil = ["mercy", "bmw", "toyota", "honda"];
merkMobil.shift();
console.log(merkMobil);

//9. splice(): digunakan untuk menambahkan atau menghilangkan elemen dan menentukan index awalnya
const prayTime = ["subuh", "dzuhur", "ashar", "magrib", "isya"];
prayTime.splice(1, 0, "duha");
console.log(prayTime);

//10. slice(): digunakan untuk array untuk membuat array baru
const animals = ["monyet", "rusa", "kambing", "sapi"];
animals.slice(2, 3);
console.log(animals);

//11. toString() : digunakan untuk mengembalikan string pada array

const arr = [1, 2, "ab", "c", 3];
console.log(arr.toString());

// 12. toLocalString():
const uang = [20000, 30000, 480908];
uang.toLocaleString("en-US");
console.log(uang);

// 13. sort(): digunakan untuk mengurutkan elemen di dalam array
const nilai = [89, 70, 65, 55, 90];
nilai.sort();
console.log(nilai);

// 14. includes(): digunakan untuk menentukan apakah ada value yang dimaksud di dalam array. indcludes mengembalikan tipe data boolean
const hewanQurban = ["kambing", "domba", "sapi", "unta"];
hewanQurban.includes("sapi");
console.log(hewanQurban);

// 15.  fill (): digunakan untuk mengubah isi array dan ditentukan mulai dari index awal dan index akhir
const numbers = [2, 3, 4, 6];
console.log(numbers.fill(9, 1, 4));

// 16. some (): digunakan untuk memeriksa data di dalam array yang menghasilkan nilai boolean.
// some mengembalikan nilai true jika ada minimal satu elemen memenuhi kondisi

const scores = [85, 90, 75, 60, 95];

const remedial = (nilai) => nilai < 75;
if (remedial) {
  console.log("ada nilai yang harus remedial");
} else {
  console.log("tidak ada nilai yang harus remedial");
}
console.log(nilai.some(remedial));

// 16. some (): digunakan untuk memeriksa data di dalam array yang menghasilkan nilai boolean.
// some mengembalikan nilai true jika keseluruhan elemen memenuhi kondisi

const examScores = [85, 90, 76, 80, 95];

const allPassed = (nilai) => nilai > 75;

console.log(examScores.every(allPassed));

//17. find (): digunakan untuk mencari data array yang cocok
const angka = [2, 3, 4, 6, 8];
const hasil = angka.find((n) => n > 3);
console.log(hasil);

// 18. reverse (): digunakan mengurutkan ulang elemen array dari akhir menjadi awal
const barisAngka = [4, 6, 7, 3, 1];
barisAngka.reverse();
console.log(barisAngka);

//19. reduce (): digunakan untuk mengubah isi array menjadi satu nilai

const angka4 = [1, 2, 3, 4];
let initialValue = 0;
const res = angka4.reduce((acc, curr) => {
  return acc + curr;
});
console.log(res);

// 20. map (): digunakan untuk mengubah isi array dan membuat array baru berdasarkan fungsi yang dipanggil
const angka5 = [1, 2, 3, 4, 5];

const mapped = angka5.map((n) => n * 2);
console.log(mapped);

//built-in function

//1. parseInt mengubah tipe data string menjadi number
console.log(parseInt("2"));

//2. math ceil() membulatkan ke atas
console.log(Math.ceil(0.95));

//3. math floor() membulatkan ke bawah
console.log(Math.floor(5.95));
