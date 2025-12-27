// MEMASAK MIE
function masakMie(rasa) {
  console.log("Adik Memasak mie rasa " + rasa);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rasa) {
        resolve("Mie " + rasa + " sudah siap!");
      } else {
        reject("Gagal memasak mie!");
      }
    }, 2000);
  });
}

// JALANKAN
console.log("Kakak mencuci piring");
masakMie("soto").then((mie) => {
  console.log("Adik : " + mie);
});
console.log("Kakak : Piring susah siap!");
