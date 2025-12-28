// MEMASAK MIE
function masakMie(rasa, callback) {
  console.log("Adik Memasak mie rasa " + rasa);
  setTimeout(() => {
    callback("Mie " + rasa + " sudah siap!");
  }, 2000);
}

// MENGHIDANGKAN - CALLBACK
function hidangkan(mie) {
  console.log("Adik : " + mie);
}

// JALANKAN
console.log("==== CALLBACK ====");
console.log("Kakak mencuci piring");
masakMie("soto", hidangkan);
console.log("Kakak : Piring susah siap!");
