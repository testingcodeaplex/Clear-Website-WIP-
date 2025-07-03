document.addEventListener('keydown', function (event) {
if (event.ctrlKey || event.metaKey) {
    // Daftar tombol yang berhubungan dengan zoom
        if (event.key === '+' || event.key === '=' || event.key === '-' || event.key === '0') {
          event.preventDefault();
        }
      }
    });
    // Juga blokir zoom dengan mouse wheel + ctrl
document.addEventListener('wheel', function(event) {
        if (event.ctrlKey) {
            event.preventDefault();
        }
    }, { passive: false });
console.log("Fungsi zoom dimatikan untuk meminimalisir bug")