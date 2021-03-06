const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // output akan tampil sesuai waktu yang di set
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        // kalau hari yang dimasukkan sesuai dengan yang ada di dataDay, maka hasilnya masuk ke resolve dan di teruskan ke (.then dan try)
        resolve(cek);
      } else {
        // kalau hari yang dimasukkan bukan hari yang ada di dataDay, maka hasilnya akan masuk ke reject dan di teruskan ke (.catch dan catch)
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

//a. HANDLING DENGAN THAN CATCH
cekHariKerja("senin")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//b. HANDLING DENGAN TRY CATCH (ASYNC/AWAIT)
const tampilHari = async (day) => {
  try {
    const resultDay = await cekHariKerja(day);
    console.log(resultDay);
  } catch (error) {
    console.log(error.message);
  }
};
tampilHari("senin");

// TASK PROMISE (.then & .catch) & ASYNC/AWAIT (try - catch)

// Untuk handling ansyncronus dapat digunakan promise .then/.catch dan asyn await (try/ catch)
// - pada promise terdapat parameter resolve, dan reject, resolve akan menangkap hasil yang terpenuhi. sedangkan reject akan menangkap hasil error
// - result pada resolve akan di teruskan ke then dan try untuk di eksekusi
// - result pada reject akan di teruskan ke .catch dan catch untuk menampilkan message error

// perbedaan keduanya
// [1].then/.catch = kalau ada fungsi di dalam fungsi maka nestingnya terlalu banyak, kalau tidak di nesting maka setiap .than harus di beri .catch
// [2] try/catch = hanya perlu mendeklarasikan fungsi di dalam try, lalu di tambahkan await untuk fungsi yang perlu di tunggu prosesnya (minim nesting)

// ex: https://stackoverflow.com/questions/66265618/nesting-then-and-catch-in-javascript-promise
