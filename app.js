var tombol = document.querySelector("#btnHitung");

tombol.addEventListener("click", function () {
  // Buat variable dulu
  var num1 = document.querySelector("#num1").value;
  var num2 = document.querySelector("#num2").value;
  var op = document.querySelector("#op").value;
  var hasil = document.querySelector("#hasil");

  // Lakukan Operasi Perhitungan
  // Jika OP sama dengan 1
  if (op == 1) {
    hasil.value = parseInt(num1) + parseInt(num2);
  }
  // Jika OP sama dengan 2
  if (op == 2) {
    hasil.value = parseInt(num1) - parseInt(num2);
  }
  // Jika OP sama dengan 3
  if (op == 3) {
    hasil.value = parseInt(num1) * parseInt(num2);
  }
  // Jika OP sama dengan 4
  if (op == 4) {
    hasil.value = parseInt(num1) / parseInt(num2);
  }
});
