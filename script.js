/*
  Nama    : [Isi nama kamu]
  Tanggal : 10 Oktober 2026
  Tujuan  : Menyimpan data Kedai Senja (profil kedai, menu, dan transaksi)
            memakai object dan array, lalu menampilkannya ke console.
*/

// 1. Object kedai
const kedaisenja = {
  nama: "Kedai Senja",
  pemilik: "Bu Wulan",
  kota: "Yogyakarta",
  tahunBerdiri: 2019,
  sedangBuka: true,
  nomorWhatsApp: "081234567890",
  website: null,
  jamOperasional: {
    buka: "08:00",
    tutup: "22:00",
  },
};

// 2. Array menu (indeks 0 sampai 5)
const kategorimenu = [
  { nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 25, tersedia: true },
  { nama: "Es Teh Manis", kategori: "Minuman", harga: 8000, stok: 40, tersedia: true },
  { nama: "Americano", kategori: "Minuman", harga: 15000, stok: 20, tersedia: true },
  { nama: "Roti Bakar Cokelat", kategori: "Makanan", harga: 15000, stok: 12, tersedia: true },
  { nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, stok: 18, tersedia: true },
  { nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, stok: 0, tersedia: false },
];

// 3. Array transaksi
// Total hitungan: TRX-001 = 51000 (bayar 60000, cukup)
//                 TRX-002 = 28000 (bayar 20000, kurang)
//                 TRX-003 = 45000 (bayar 50000, cukup)
const transaksitunai = [
  {
    kode: "TRX-001",
    pelanggan: "Rani",
    sudahMember: true,
    uangBayar: 60000,
    catatan: "Kopi kurang manis",
    pesanan: [
      { indeksMenu: 0, jumlah: 2 },
      { indeksMenu: 3, jumlah: 1 },
    ],
  },
  {
    kode: "TRX-002",
    pelanggan: "Bagas",
    sudahMember: false,
    uangBayar: 20000,
    catatan: null,
    pesanan: [
      { indeksMenu: 1, jumlah: 2 },
      { indeksMenu: 4, jumlah: 1 },
    ],
  },
  {
    kode: "TRX-003",
    pelanggan: "Sinta",
    sudahMember: true,
    uangBayar: 50000,
    catatan: null,
    pesanan: [
      { indeksMenu: 2, jumlah: 1 },
      { indeksMenu: 3, jumlah: 2 },
    ],
  },
];

// 4. Cetak ke console
console.log(kedai.nama); // notasi titik
console.log(kedai["kota"]); // notasi kurung siku
console.log(kedai.jamOperasional.tutup);
console.log(menu[0]); // menu pertama
console.log(menu[menu.length - 1]); // menu terakhir
console.log(transaksi[1].pelanggan);
console.log(menu[transaksi[2].pesanan[1].indeksMenu].nama);

console.log(typeof kedai.tahunBerdiri); // "number"
console.log(typeof kedai.sedangBuka); // "boolean"
console.log(typeof kedai.website); // "object"
console.log(typeof kedai.jamOperasional); // "object"
console.log(typeof menu); // "object"
console.log(typeof transaksi[0].catatan); // "string"

// 5. Variabel tanpa nilai
let catatan_Kasir;
console.log(catatanKasir); // undefined

/*
  JAWABAN

  1. Kenapa nomorWhatsApp disimpan sebagai string, bukan number?
     Nomor telepon adalah identitas, bukan nilai yang dihitung. Kalau dijadikan
     number, angka 0 di depan hilang (081234567890 menjadi 81234567890). Nomor
     yang panjang atau berawalan "+62" juga tidak bisa ditulis sebagai number.
     Kita juga tidak pernah menjumlahkan atau mengalikan nomor telepon.

  2. Kenapa website diisi null, sedangkan catatanKasir dibiarkan tanpa nilai?
     null berarti "sengaja dikosongkan": kedai ini memang belum punya website,
     dan kita menyatakannya secara eksplisit. Variabel yang dibiarkan tanpa nilai
     otomatis berisi undefined, artinya "belum diberi nilai" dan tidak ada
     keputusan apa pun di baliknya.

  3. Jika menu berisi 6 item, apa hasil menu[6]? Kenapa?
     undefined. Indeks array dimulai dari 0, jadi 6 item menempati indeks 0
     sampai 5. Indeks 6 tidak ada, dan membaca properti yang tidak ada
     menghasilkan undefined (tidak error).

  4. Apa hasil typeof menu? Kenapa hasilnya begitu?
     "object". Di JavaScript array adalah jenis object khusus, jadi typeof
     tidak membedakannya dari object biasa. Untuk memastikan sebuah nilai
     array, pakai Array.isArray(menu), yang hasilnya true.

  5. Kenapa menu dibuat sebagai array, sedangkan kedai dibuat sebagai object?
     menu adalah kumpulan banyak item sejenis yang berurutan, dan kita
     mengaksesnya lewat indeks atau melakukan loop. kedai adalah satu benda
     dengan banyak atribut berbeda jenis (nama, kota, jam buka), dan lebih
     jelas diakses lewat nama properti seperti kedai.nama.
*/

/*
  Nama    : [Isi nama kamu]
  Tanggal : 10 Oktober 2026
  Tujuan  : Menyimpan data Kedai Senja (profil kedai, menu, dan transaksi)
            memakai object dan array, lalu menampilkannya ke console.
*/

// 1. Object kedai
const kedai = {
  nama: "Kedai Senja",
  pemilik: "Bu Wulan",
  kota: "Yogyakarta",
  tahunBerdiri: 2019,
  sedangBuka: true,
  nomorWhatsApp: "081234567890",
  website: null,
  jamOperasional: {
    buka: "08:00",
    tutup: "22:00",
  },
};

// 2. Array menu (indeks 0 sampai 5)
const menu = [
  { nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 25, tersedia: true },
  { nama: "Es Teh Manis", kategori: "Minuman", harga: 8000, stok: 40, tersedia: true },
  { nama: "Americano", kategori: "Minuman", harga: 15000, stok: 20, tersedia: true },
  { nama: "Roti Bakar Cokelat", kategori: "Makanan", harga: 15000, stok: 12, tersedia: true },
  { nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, stok: 18, tersedia: true },
  { nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, stok: 0, tersedia: false },
];

// 3. Array transaksi
// Total bayar (setelah Bagian 3): TRX-001 = 50949 (bayar 60000, cukup)
//                                 TRX-002 = 31080 (bayar 20000, kurang)
//                                 TRX-003 = 74925 (bayar 100000, cukup)
// Data TRX-003 diubah di Bagian 3 (4 roti, bayar 100000) supaya total item = 5
// dan perbandingan || vs && pada gratisAntar bisa menghasilkan hasil berbeda.
const transaksi = [
  {
    kode: "TRX-001",
    pelanggan: "Rani",
    sudahMember: true,
    uangBayar: 60000,
    catatan: "Kopi kurang manis",
    pesanan: [
      { indeksMenu: 0, jumlah: 2 },
      { indeksMenu: 3, jumlah: 1 },
    ],
  },
  {
    kode: "TRX-002",
    pelanggan: "Bagas",
    sudahMember: false,
    uangBayar: 20000,
    catatan: null,
    pesanan: [
      { indeksMenu: 1, jumlah: 2 },
      { indeksMenu: 4, jumlah: 1 },
    ],
  },
  {
    kode: "TRX-003",
    pelanggan: "Sinta",
    sudahMember: true,
    uangBayar: 100000,
    catatan: null,
    pesanan: [
      { indeksMenu: 2, jumlah: 1 },
      { indeksMenu: 3, jumlah: 4 },
    ],
  },
];

// 4. Cetak ke console
console.log(kedai.nama); // notasi titik
console.log(kedai["kota"]); // notasi kurung siku
console.log(kedai.jamOperasional.tutup);
console.log(menu[0]); // menu pertama
console.log(menu[menu.length - 1]); // menu terakhir
console.log(transaksi[1].pelanggan);
console.log(menu[transaksi[2].pesanan[1].indeksMenu].nama);

console.log(typeof kedai.tahunBerdiri); // "number"
console.log(typeof kedai.sedangBuka); // "boolean"
console.log(typeof kedai.website); // "object"
console.log(typeof kedai.jamOperasional); // "object"
console.log(typeof menu); // "object"
console.log(typeof transaksi[0].catatan); // "string"

// 5. Variabel tanpa nilai
let catatanKasir;
console.log(catatanKasir); // undefined

/*
  JAWABAN

  1. Kenapa nomorWhatsApp disimpan sebagai string, bukan number?
     Nomor telepon adalah identitas, bukan nilai yang dihitung. Kalau dijadikan
     number, angka 0 di depan hilang (081234567890 menjadi 81234567890). Nomor
     yang panjang atau berawalan "+62" juga tidak bisa ditulis sebagai number.
     Kita juga tidak pernah menjumlahkan atau mengalikan nomor telepon.

  2. Kenapa website diisi null, sedangkan catatanKasir dibiarkan tanpa nilai?
     null berarti "sengaja dikosongkan": kedai ini memang belum punya website,
     dan kita menyatakannya secara eksplisit. Variabel yang dibiarkan tanpa nilai
     otomatis berisi undefined, artinya "belum diberi nilai" dan tidak ada
     keputusan apa pun di baliknya.

  3. Jika menu berisi 6 item, apa hasil menu[6]? Kenapa?
     undefined. Indeks array dimulai dari 0, jadi 6 item menempati indeks 0
     sampai 5. Indeks 6 tidak ada, dan membaca properti yang tidak ada
     menghasilkan undefined (tidak error).

  4. Apa hasil typeof menu? Kenapa hasilnya begitu?
     "object". Di JavaScript array adalah jenis object khusus, jadi typeof
     tidak membedakannya dari object biasa. Untuk memastikan sebuah nilai
     array, pakai Array.isArray(menu), yang hasilnya true.

  5. Kenapa menu dibuat sebagai array, sedangkan kedai dibuat sebagai object?
     menu adalah kumpulan banyak item sejenis yang berurutan, dan kita
     mengaksesnya lewat indeks atau melakukan loop. kedai adalah satu benda
     dengan banyak atribut berbeda jenis (nama, kota, jam buka), dan lebih
     jelas diakses lewat nama properti seperti kedai.nama.
*/


// ============================================================
// BAGIAN 3: Perhitungan Transaksi dan Laporan Harian
// ============================================================

// Nilai tetap aturan kedai
const TARIF_PAJAK = 0.11;
const PERSEN_POTONGAN_MEMBER = 0.1;
const MINIMAL_SUBTOTAL_GRATIS_ANTAR = 100000;
const MINIMAL_ITEM_GRATIS_ANTAR = 5;
const PECAHAN_BESAR = 50000;
const PECAHAN_SEDANG = 20000;

// ---------- Transaksi 1 (TRX-001, Rani) ----------
const trx1ItemA = transaksi[0].pesanan[0];
const trx1ItemB = transaksi[0].pesanan[1];
const trx1MenuA = menu[trx1ItemA.indeksMenu];
const trx1MenuB = menu[trx1ItemB.indeksMenu];

const subtotalTrx1 = trx1MenuA.harga * trx1ItemA.jumlah + trx1MenuB.harga * trx1ItemB.jumlah;
const potonganTrx1 = transaksi[0].sudahMember ? subtotalTrx1 * PERSEN_POTONGAN_MEMBER : 0;
const pajakTrx1 = (subtotalTrx1 - potonganTrx1) * TARIF_PAJAK;
const totalBayarTrx1 = subtotalTrx1 - potonganTrx1 + pajakTrx1;
const kembalianTrx1 = transaksi[0].uangBayar - totalBayarTrx1;

const uangCukupTrx1 = transaksi[0].uangBayar >= totalBayarTrx1;
const jumlahItemTrx1 = trx1ItemA.jumlah + trx1ItemB.jumlah;
const gratisAntarTrx1 =
  subtotalTrx1 >= MINIMAL_SUBTOTAL_GRATIS_ANTAR || jumlahItemTrx1 >= MINIMAL_ITEM_GRATIS_ANTAR;
const semuaMenuTersediaTrx1 = trx1MenuA.tersedia && trx1MenuB.tersedia;

// let: nilainya baru diisi di dalam if (hanya jika kembalian tidak negatif)
let sisaSetelah50000Trx1 = null;
let sisaSetelah20000Trx1 = null;
if (kembalianTrx1 >= 0) {
  sisaSetelah50000Trx1 = kembalianTrx1 % PECAHAN_BESAR;
  sisaSetelah20000Trx1 = sisaSetelah50000Trx1 % PECAHAN_SEDANG;
}

// ---------- Transaksi 2 (TRX-002, Bagas) ----------
const trx2ItemA = transaksi[1].pesanan[0];
const trx2ItemB = transaksi[1].pesanan[1];
const trx2MenuA = menu[trx2ItemA.indeksMenu];
const trx2MenuB = menu[trx2ItemB.indeksMenu];

const subtotalTrx2 = trx2MenuA.harga * trx2ItemA.jumlah + trx2MenuB.harga * trx2ItemB.jumlah;
const potonganTrx2 = transaksi[1].sudahMember ? subtotalTrx2 * PERSEN_POTONGAN_MEMBER : 0;
const pajakTrx2 = (subtotalTrx2 - potonganTrx2) * TARIF_PAJAK;
const totalBayarTrx2 = subtotalTrx2 - potonganTrx2 + pajakTrx2;
const kembalianTrx2 = transaksi[1].uangBayar - totalBayarTrx2;

const uangCukupTrx2 = transaksi[1].uangBayar >= totalBayarTrx2;
const jumlahItemTrx2 = trx2ItemA.jumlah + trx2ItemB.jumlah;
const gratisAntarTrx2 =
  subtotalTrx2 >= MINIMAL_SUBTOTAL_GRATIS_ANTAR || jumlahItemTrx2 >= MINIMAL_ITEM_GRATIS_ANTAR;
const semuaMenuTersediaTrx2 = trx2MenuA.tersedia && trx2MenuB.tersedia;

let sisaSetelah50000Trx2 = null;
let sisaSetelah20000Trx2 = null;
if (kembalianTrx2 >= 0) {
  sisaSetelah50000Trx2 = kembalianTrx2 % PECAHAN_BESAR;
  sisaSetelah20000Trx2 = sisaSetelah50000Trx2 % PECAHAN_SEDANG;
}

// ---------- Transaksi 3 (TRX-003, Sinta) ----------
const trx3ItemA = transaksi[2].pesanan[0];
const trx3ItemB = transaksi[2].pesanan[1];
const trx3MenuA = menu[trx3ItemA.indeksMenu];
const trx3MenuB = menu[trx3ItemB.indeksMenu];

const subtotalTrx3 = trx3MenuA.harga * trx3ItemA.jumlah + trx3MenuB.harga * trx3ItemB.jumlah;
const potonganTrx3 = transaksi[2].sudahMember ? subtotalTrx3 * PERSEN_POTONGAN_MEMBER : 0;
const pajakTrx3 = (subtotalTrx3 - potonganTrx3) * TARIF_PAJAK;
const totalBayarTrx3 = subtotalTrx3 - potonganTrx3 + pajakTrx3;
const kembalianTrx3 = transaksi[2].uangBayar - totalBayarTrx3;

const uangCukupTrx3 = transaksi[2].uangBayar >= totalBayarTrx3;
const jumlahItemTrx3 = trx3ItemA.jumlah + trx3ItemB.jumlah;
const gratisAntarTrx3 =
  subtotalTrx3 >= MINIMAL_SUBTOTAL_GRATIS_ANTAR || jumlahItemTrx3 >= MINIMAL_ITEM_GRATIS_ANTAR;
const semuaMenuTersediaTrx3 = trx3MenuA.tersedia && trx3MenuB.tersedia;

let sisaSetelah50000Trx3 = null;
let sisaSetelah20000Trx3 = null;
if (kembalianTrx3 >= 0) {
  sisaSetelah50000Trx3 = kembalianTrx3 % PECAHAN_BESAR;
  sisaSetelah20000Trx3 = sisaSetelah50000Trx3 % PECAHAN_SEDANG;
}

// ---------- Laporan harian ----------
let pendapatanHarian = 0;
let jumlahTransaksi = 0;

pendapatanHarian += totalBayarTrx1;
jumlahTransaksi++;
pendapatanHarian += totalBayarTrx2;
jumlahTransaksi++;
pendapatanHarian += totalBayarTrx3;
jumlahTransaksi++;

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
const selisihTerbesar =
  Math.max(totalBayarTrx1, totalBayarTrx2, totalBayarTrx3) -
  Math.min(totalBayarTrx1, totalBayarTrx2, totalBayarTrx3);
const persentaseTransaksiPertama = (totalBayarTrx1 / pendapatanHarian) * 100;
const hargaKopiTigaBulan = menu[0].harga * 1.05 ** 3;

// ---------- Cetak ----------
const rp = (angka) => "Rp " + angka.toLocaleString("id-ID");

console.log("==================================================");
console.log(`  LAPORAN HARIAN ${kedai.nama.toUpperCase()}`);
console.log("==================================================");
console.log(`Kedai : ${kedai.nama} (${kedai.kota})`);
console.log(`Jam   : ${kedai.jamOperasional.buka} - ${kedai.jamOperasional.tutup}`);

console.log(`
--- ${transaksi[0].kode} | ${transaksi[0].pelanggan} ${transaksi[0].sudahMember ? "(member)" : ""}
Subtotal      : ${rp(subtotalTrx1)}
Potongan      : ${rp(potonganTrx1)}
Pajak (11%)   : ${rp(pajakTrx1)}
Total bayar   : ${rp(totalBayarTrx1)}
Uang bayar    : ${rp(transaksi[0].uangBayar)}
Kembalian     : ${rp(kembalianTrx1)}
Uang cukup    : ${uangCukupTrx1}
Gratis antar  : ${gratisAntarTrx1}
Menu tersedia : ${semuaMenuTersediaTrx1}
Sisa / 50000  : ${sisaSetelah50000Trx1}
Sisa / 20000  : ${sisaSetelah20000Trx1}`);

console.log(`
--- ${transaksi[1].kode} | ${transaksi[1].pelanggan} ${transaksi[1].sudahMember ? "(member)" : ""}
Subtotal      : ${rp(subtotalTrx2)}
Potongan      : ${rp(potonganTrx2)}
Pajak (11%)   : ${rp(pajakTrx2)}
Total bayar   : ${rp(totalBayarTrx2)}
Uang bayar    : ${rp(transaksi[1].uangBayar)}
Kembalian     : ${rp(kembalianTrx2)}
Uang cukup    : ${uangCukupTrx2}
Gratis antar  : ${gratisAntarTrx2}
Menu tersedia : ${semuaMenuTersediaTrx2}
Sisa / 50000  : ${sisaSetelah50000Trx2}
Sisa / 20000  : ${sisaSetelah20000Trx2}`);

console.log(`
--- ${transaksi[2].kode} | ${transaksi[2].pelanggan} ${transaksi[2].sudahMember ? "(member)" : ""}
Subtotal      : ${rp(subtotalTrx3)}
Potongan      : ${rp(potonganTrx3)}
Pajak (11%)   : ${rp(pajakTrx3)}
Total bayar   : ${rp(totalBayarTrx3)}
Uang bayar    : ${rp(transaksi[2].uangBayar)}
Kembalian     : ${rp(kembalianTrx3)}
Uang cukup    : ${uangCukupTrx3}
Gratis antar  : ${gratisAntarTrx3}
Menu tersedia : ${semuaMenuTersediaTrx3}
Sisa / 50000  : ${sisaSetelah50000Trx3}
Sisa / 20000  : ${sisaSetelah20000Trx3}`);

console.log(`
--- RINGKASAN HARI INI
Jumlah transaksi          : ${jumlahTransaksi}
Pendapatan harian         : ${rp(pendapatanHarian)}
Rata-rata per transaksi   : ${rp(rataRataPendapatan)}
Selisih terbesar          : ${rp(selisihTerbesar)}
Porsi transaksi pertama   : ${persentaseTransaksiPertama.toFixed(2)}%
Harga ${menu[0].nama} 3 bulan lagi : ${rp(Math.round(hargaKopiTigaBulan))}`);

// ---------- Bukti jawaban nomor 6 ----------
const hargaKopiAsli = menu[0].harga;
console.log("\n[Bukti 6] Harga kopi di data:", menu[0].harga);
console.log("[Bukti 6] subtotalTrx1 yang sudah tersimpan:", subtotalTrx1);

menu[0].harga = 20000; // ubah data
console.log("[Bukti 6] Setelah harga diubah ke 20000:");
console.log("  subtotalTrx1 (variabel lama) :", subtotalTrx1);
console.log(
  "  subtotal dihitung ulang      :",
  menu[0].harga * trx1ItemA.jumlah + trx1MenuB.harga * trx1ItemB.jumlah
);
menu[0].harga = hargaKopiAsli; // kembalikan data seperti semula

/*
  JAWABAN BAGIAN 3

  1. Perhitungan manual TRX-001 (Rani, member):
     Subtotal    = 2 x 18000 + 1 x 15000     = 36000 + 15000 = 51000
     Potongan    = 10% x 51000               = 5100
     Setelah     = 51000 - 5100              = 45900
     Pajak       = 11% x 45900               = 5049
     Total bayar = 45900 + 5049              = 50949
     Kembalian   = 60000 - 50949             = 9051
     Hasilnya SAMA dengan output program (Total bayar Rp 50.949, kembalian Rp 9.051).

  2. TRX-003 (Sinta): subtotal 75000, jumlah item 1 + 4 = 5.
     Dengan ||  : 75000 >= 100000 (false) || 5 >= 5 (true) -> true.
     Dengan &&  : 75000 >= 100000 (false) && 5 >= 5 (true) -> false.
     Berbeda karena || sudah true jika SALAH SATU syarat terpenuhi, sedangkan &&
     baru true jika KEDUA syarat terpenuhi. Sinta memenuhi syarat jumlah item
     saja, bukan syarat subtotal.

  3. Pajak TRX-001, dengan dan tanpa kurung:
     Dengan kurung   : (subtotal - potongan) * TARIF_PAJAK
                       = (51000 - 5100) * 0.11 = 45900 * 0.11 = 5049
     Tanpa kurung    : subtotal - potongan * TARIF_PAJAK
                       = 51000 - (5100 * 0.11) = 51000 - 561 = 50439
     Tanpa kurung, perkalian dikerjakan lebih dulu daripada pengurangan.

  4. const (nilainya tidak pernah diganti setelah dibuat):
     - TARIF_PAJAK: tarif pajak aturan tetap, dijaga agar tidak berubah tidak sengaja.
     - subtotalTrx1: hasil hitungan sekali jalan, tidak diubah lagi.
     - hargaKopiTigaBulan: hasil simulasi sekali hitung.
     let (nilainya berubah atau baru diisi kemudian):
     - pendapatanHarian: bertambah tiap transaksi lewat +=.
     - jumlahTransaksi: bertambah tiap transaksi lewat ++.
     - sisaSetelah50000Trx1: diisi null dulu, baru diisi di dalam if
       jika kembalian tidak negatif.

  5. harga * 1.05 * 3 salah karena itu menambah 5% sekali lalu mengalikan 3,
     jadi harga menjadi tiga kali lipat. Kenaikan 5% per bulan itu berlipat:
     tiap bulan 5% dihitung dari harga bulan sebelumnya, jadi pengali harganya
     1.05 dikali dirinya sendiri 3 kali.
     1.05 ** 3 = 1.157625 (harga naik sekitar 15,76%).
     1.05 * 3  = 3.15 (harga naik 215%, tidak masuk akal).
     Hasil: 18000 * 1.05 ** 3 = 20837,25, dibulatkan menjadi Rp 20.837.

  6. Tidak berubah otomatis. Variabel seperti subtotalTrx1 menyimpan hasil
     angka pada saat baris itu dijalankan, bukan rumus. Kodenya ada di bagian
     "Bukti 6" di atas: setelah menu[0].harga diubah menjadi 20000,
     subtotalTrx1 tetap 51000, sedangkan hitung ulang menghasilkan 55000.
     Agar hasil ikut berubah, perhitungannya harus dijalankan ulang.
*/