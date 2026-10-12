console.log(5 + "5");
//tebakan:55
//hasil asli:55
console.log("10" - 4);
//tebakan: 6
//hasil asli:6
console.log("10" * "2");
//tebakan:20
//hasil asli:20
console.log(typeof ("5" + 5));
//tebakan:string
//hasil asli:string
console.log(9 % 4);
//tebakan: 1
//hasil asli: 1
console.log((2 + 3) ** 2);
//tebakan: 25
//hasil asli:25
console.log(10 / 4);
//tebakan:2.5
//hasil asli:5
console.log(1 / 0);
//tebakan:infinity
//hasil asli:infinity
console.log("abc" * 2);
//tebakan:nan
//hasil asli:nan
console.log(typeof NaN);
//tebakan:number
//hasil asli:number
console.log((5 > 3 && 2 > 4) || 1 === 1);
//tebakan:true
//hasil asli:true
console.log(!true || !false);
//tebakan:true
//hasil asli:true
console.log("5" == 5 && "5" !== 5);
//tebakan:true
//hasil asli:true
console.log(typeof [] === typeof {});
//tebakan:true
//hasil asli:true
console.log([10, 20, 30][1] + [10, 20, 30][2]);
//tebakan:50
//hasil asli:50


console.log("=== Eksperimen var dan let ===");

// Eksperimen 1: var bisa dibaca dari luar blok
{
    var namaVar = "Kopi Senja";
}
console.log(namaVar); // Output: Kopi Senja

// Eksperimen 2: let tidak bisa dibaca dari luar blok
{
    let namaLet = "Yogyakarta";
}
// console.log(namaLet);
// Jika diaktifkan, error: ReferenceError: namaLet is not defined

// Eksperimen 3: var boleh dideklarasikan ulang
var harga = 10000;
var harga = 15000;
console.log(harga); // Output: 15000

// Eksperimen 4: let tidak boleh dideklarasikan ulang
let jumlah = 2;
// let jumlah = 3;
// Jika diaktifkan, error: SyntaxError: Identifier 'jumlah' has already been declared


/*
1. Kenapa 5 + "5" dan "10" - 4 hasilnya berbeda jenis?

   5 + "5" menghasilkan string "55" karena operator +
   menggabungkan angka 5 dengan teks "5".

   "10" - 4 menghasilkan number 6 karena operator -
   mengubah string "10" menjadi angka sebelum menghitung
   pengurangan.


2. Apa arti NaN dan kenapa tipenya number?

   NaN adalah singkatan dari Not-a-Number, yaitu nilai
   yang menunjukkan hasil perhitungan numerik yang tidak
   valid. Dalam JavaScript, NaN termasuk tipe number
   karena merupakan bagian dari sistem bilangan JavaScript.


3. Urutan evaluasi 5 > 3 && 2 > 4 || 1 === 1

   Langkah 1: 5 > 3 menghasilkan true.
   Langkah 2: 2 > 4 menghasilkan false.
   Langkah 3: true && false menghasilkan false.
   Langkah 4: 1 === 1 menghasilkan true.
   Langkah 5: false || true menghasilkan true.

   Jadi, hasil akhirnya adalah true. Operator && dievaluasi
   lebih dahulu daripada ||.


4. Cara membedakan array dan object biasa

   typeof [] dan typeof {} sama-sama menghasilkan "object".
   Untuk membedakan array, gunakan Array.isArray().

   Contoh:
   Array.isArray([10, 20, 30]) menghasilkan true.
   Array.isArray({ nama: "Kopi" }) menghasilkan false.


5. Statement dan expression pada kode berikut:

   let hasil = 5 + 10;
   console.log(hasil * 2);

   Statement 1: let hasil = 5 + 10;
   Expression 5 + 10 menghasilkan 15.
   Statement 2: console.log(hasil * 2);
   Expression hasil * 2 menghasilkan 30.
   Expression hasil pada baris kedua bernilai 15.

   Statement adalah instruksi yang dijalankan program,
   sedangkan expression adalah bagian kode yang menghasilkan
   suatu nilai.


6. Di mana eksperimen.js dijalankan?

   File eksperimen.js dapat dijalankan melalui Node.js
   di terminal VS Code dengan perintah:
   node eksperimen.js

   VS Code adalah editor kode, sedangkan Node.js adalah
   runtime yang menjalankan JavaScript di luar browser.
   JavaScript juga dapat dijalankan di browser melalui
   console atau tag script dalam HTML.

   Modul memakai let dan const karena cakupan variabelnya
   lebih jelas dan membantu menghindari deklarasi ulang
   yang tidak disengaja. const dipakai untuk variabel
   yang tidak perlu diisi ulang, sedangkan let dipakai
   jika nilainya perlu berubah.


7. Hasil eksperimen var dan let

   var yang dibuat di dalam blok masih bisa dibaca dari
   luar blok karena var memiliki cakupan fungsi, bukan
   cakupan blok.

   let yang dibuat di dalam blok tidak bisa dibaca dari
   luar blok karena let memiliki cakupan blok. Jika
   diakses dari luar, muncul ReferenceError.

   var dapat dideklarasikan ulang dengan nama yang sama
   dalam cakupan yang sama. Deklarasi let dengan nama
   yang sama dalam cakupan yang sama menyebabkan
   SyntaxError.


8. Contoh bug dalam program besar

   Misalnya, program kasir menggunakan var total untuk
   menyimpan total harga belanja. Di bagian lain, variabel
   var total dideklarasikan ulang untuk menyimpan total
   barang. Nilai total harga bisa tertimpa sehingga
   jumlah pembayaran menjadi salah.

   Menggunakan let atau const dengan cakupan yang tepat
   membantu mencegah kesalahan seperti ini.
*/
