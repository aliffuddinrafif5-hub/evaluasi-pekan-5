// FIX: komentar blok /* tidak pernah ditutup, diganti komentar satu baris
// Program hitung transaksi Kedai Senja
// FIX: const diganti let karena nama kedai nanti berganti
let namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
// FIX: "2" (string) diganti 2 (number) agar + menjumlahkan, bukan menyambung teks
let jumlahRoti = 2;
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
let jumlahItem = jumlahKopi + jumlahRoti;

// Subtotal. Seharusnya: 84000
// FIX: jumlahkopi -> jumlahKopi (JavaScript membedakan huruf besar/kecil)
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
// FIX: tambah kurung agar pengurangan dihitung lebih dulu sebelum dikali tarif
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
// FIX: tambah titik koma di akhir pernyataan
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
// FIX: = (assignment) diganti >= (perbandingan)
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
// FIX: urutan dibalik, seharusnya uangBayar - totalBayar
let kembalian = uangBayar - totalBayar;

// Jumlah item genap? Seharusnya: false
// FIX: genap berarti sisa bagi 0, bukan 1
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
// FIX: hasil penjumlahan harus disimpan kembali ke variabel
transaksiSelesai += 1;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
// FIX: hapus `let` karena deklarasi ulang; cukup mengisi ulang nilainya
namaKedai = "Kedai Senja Baru";

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// FIX: baris TARIF_PAJAK = 0.12 dihapus karena const tidak boleh diubah
// (TARIF_PAJAK tetap 0.11)

// FIX: Console -> console (huruf kecil)
console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);
// Output: Kedai Senja Baru 5 84000 8140 82140 true 17860 false 1

/*
CATATAN BUG
Jenis: [E] = menghentikan program dengan error, [S] = tidak error tapi hasil salah

1. Komentar /* tidak ditutup
   [E] SyntaxError. Seluruh kode setelahnya dianggap komentar yang tidak pernah berakhir.

2. jumlahRoti = "2"
   [S] Isinya string, sehingga 3 + "2" menghasilkan "32" (penyambungan teks), bukan 5.
       Subtotal juga ikut rawan salah tipe.

3. jumlahkopi (k kecil)
   [E] ReferenceError. Variabel bernama jumlahkopi tidak pernah dideklarasikan,
       yang ada jumlahKopi.

4. pajak = subtotal - 10000 * TARIF_PAJAK
   [S] Perkalian didahulukan dari pengurangan, jadi yang dihitung 84000 - 1100 = 82900.
       Harusnya (subtotal - 10000) * TARIF_PAJAK.

5. Titik koma hilang di totalBayar
   [S] Sebenarnya tidak error dan hasil tetap benar karena JavaScript menyisipkan
       titik koma otomatis (ASI). Tetap dianggap kesalahan gaya karena berisiko
       menimbulkan bug jika baris berikutnya diawali ( atau [.

6. uangCukup = uangBayar = totalBayar
   [S] Operator = adalah assignment, bukan perbandingan. uangBayar malah ditimpa
       jadi 82140 dan uangCukup berisi 82140, bukan true/false.

7. kembalian = totalBayar - uangBayar
   [S] Urutan operan terbalik, hasilnya -17860. Kembalian adalah uang bayar dikurangi total.

8. itemGenap = jumlahItem % 2 === 1
   [S] Itu syarat ganjil. Bilangan genap bersisa 0 jika dibagi 2.

9. transaksiSelesai + 1;
   [S] Pernyataan ini menghitung nilai tetapi tidak menyimpannya,
       sehingga transaksiSelesai tetap 0.

10. let namaKedai = ... (sudah ada const namaKedai)
    [E] SyntaxError karena identifier sudah dideklarasikan.
        Kalau hanya `let`-nya dihapus, const tetap memunculkan TypeError saat diisi ulang,
        jadi deklarasi awal juga diubah menjadi let.

11. TARIF_PAJAK = 0.12
    [E] TypeError: Assignment to constant variable. const tidak boleh diberi nilai baru.

12. Console.log
    [E] ReferenceError. Objek bawaannya console (huruf kecil), Console tidak ada.
*/