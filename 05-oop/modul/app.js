console.log("hello javascript");

// import dengan named export
import { penjumlahan, PI } from "./kolkulator.js";

// import dengan default export (langsung jadi variable baru)
import apaSaja from "./kolkulator.js";

const hasilJumlah = penjumlahan(29, 97);
console.log(`Hasil Penjumlahan : ${hasilJumlah}`);

const luasPermukaanBumi = 4 * PI * (6371 * 6371);
console.log(
  `Luas Permukaan Bumi adalah ${luasPermukaanBumi.toLocaleString()} km²`
);

const object = new apaSaja(777);
console.log(`Angka yang dikembalikan adalah : ${object.angka}`);
