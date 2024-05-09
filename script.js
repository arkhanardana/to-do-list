// Ambil elemen input dengan id "input-box"
const inputBox = document.getElementById("input-box");

// Ambil elemen div dengan id "list-container"
const listContainer = document.getElementById("list-container");

// Function untuk menambahkan tugas baru ke daftar
function addTask() {
  // Memeriksa apakah kotak input kosong
  if (inputBox.value === "") {
    // Menampilkan pesan peringatan jika kotak input kosong
    alert("Anda harus menulis sesuatu!");
  } else {
    // Membuat elemen <li> baru untuk menampilkan tugas
    let list = document.createElement("li");
    // Menambahkan teks tugas dari kotak input ke elemen <li>
    list.innerHTML = inputBox.value;
    // Menambahkan elemen <li> ke dalam list container
    listContainer.appendChild(list);
    // Membuat elemen <span> untuk tombol hapus
    let span = document.createElement("span");
    // Menambahkan simbol '×' ke dalam elemen <span>
    span.innerHTML = "\u00d7";
    // Menambahkan elemen <span> ke dalam elemen <li>
    list.appendChild(span);
  }
  // Mengosongkan kotak input setelah menambahkan tugas
  inputBox.value = "";
  // Menyimpan data setelah penambahan tugas
  saveData();
}

// Menambahkan event listener untuk tombol 'Enter' pada kotak input
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // Memanggil fungsi addTask() ketika tombol 'Enter' ditekan
    addTask();
  }
});

// Menambahkan event listener untuk mengatur tugas sebagai 'checked' atau menghapus tugas
listContainer.addEventListener(
  "click",
  function (e) {
    // Memeriksa apakah elemen yang diklik adalah elemen <li>
    if (e.target.tagName === "LI") {
      // Toggle kelas 'checked' pada elemen <li> yang diklik
      e.target.classList.toggle("checked");
      // Menyimpan data setelah perubahan status tugas
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // Menghapus elemen <li> yang berisi tombol '×' ketika tombol '×' diklik
      e.target.parentElement.remove();
      // Menyimpan data setelah penghapusan tugas
      saveData();
    }
  },
  false
);

// Fungsi untuk menyimpan data tugas ke dalam local storage
function saveData() {
  // Menyimpan HTML dari kontainer daftar ke dalam local storage dengan key "data"
  localStorage.setItem("data", listContainer.innerHTML);
}

// Fungsi untuk menampilkan tugas yang disimpan dari local storage saat halaman dimuat
function showTask() {
  // Memuat HTML dari local storage ke dalam kontainer daftar
  listContainer.innerHTML = localStorage.getItem("data");
}
// Memanggil fungsi showTask() saat halaman dimuat
showTask();
