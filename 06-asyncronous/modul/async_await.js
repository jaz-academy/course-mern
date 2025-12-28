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

// FUNGSI ASYNC AWAIT
async function hidangkan() {
  try {
    const mie = await masakMie("ayam bawang");
    console.log("Adik : " + mie);
  } catch (error) {
    console.log(error);
  }
}

// JALANKAN
console.log("==== ASYNC AWAIT ====");
console.log("Kakak mencuci piring");
hidangkan();
console.log("Kakak : Piring susah siap!");
