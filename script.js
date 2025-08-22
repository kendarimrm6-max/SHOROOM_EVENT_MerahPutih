// Show/hide modals
const modalMap = {
  "btn-lokasi": "modal-lokasi",
  "btn-waktu": "modal-waktu",
  "btn-benefit": "modal-benefit",
  "btn-info": "modal-info"
};

Object.keys(modalMap).forEach(btnId => {
  document.getElementById(btnId).onclick = () => {
    document.querySelectorAll('.modal').forEach(m => m.classList.remove('show'));
    document.getElementById(modalMap[btnId]).classList.add('show');
    if (btnId === 'btn-waktu') startCountdownModal();
  };
});

// Close modal
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.onclick = function() {
    this.closest('.modal').classList.remove('show');
  }
});
window.addEventListener('click', function(event) {
  document.querySelectorAll('.modal.show').forEach(modal => {
    if (event.target === modal) modal.classList.remove('show');
  });
});

// Countdown (on Waktu modal only)
function startCountdownModal() {
  const targetDate = new Date("2025-08-23T16:00:00+08:00").getTime();
  const countdown = document.getElementById("countdown-modal");
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) {
      countdown.innerHTML = "<b>Acara sudah dimulai!</b>";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = `⏳ ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    if (distance > 0) setTimeout(updateCountdown, 1000);
  }
  updateCountdown();
}

// Survey WA
document.getElementById("surveyForm").onsubmit = function(e) {
  e.preventDefault();
  const kepuasan = this.kepuasan.value;
  const pesan = this.pesan.value;
  const text = encodeURIComponent(
    `Survey Undangan Showroom Event Merah Putih Daihatsu MRM Kendari:\n\nKepuasan: ${kepuasan}\nPesan/Kesan: ${pesan}`
  );
  window.open(`https://wa.me/6285256025097?text=${text}`, "_blank");
};
