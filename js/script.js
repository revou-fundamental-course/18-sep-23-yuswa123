
// Ambil semua tautan dalam navigasi
const links = document.querySelectorAll('ul li a');

// Tambahkan event listener untuk setiap tautan
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Fungsi untuk animasi smooth scroll
function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  // Gulir ke elemen target dengan animasi
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}
const form = document.getElementById('myForm');
const nameInput = document.getElementById('yourName');
const emailInput = document.getElementById('yourEmail');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const interestSelect = document.getElementById('interest');
const interestError = document.getElementById('interestError');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Validasi Nama
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Nama harus diisi';
    nameInput.classList.add('error-input');
  } else {
    nameError.textContent = '';
    nameInput.classList.remove('error-input');
  }

  // Validasi Email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Email tidak valid';
    emailInput.classList.add('error-input');
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('error-input');
    // Jika formulir valid, Anda dapat mengirimkannya ke server di sini
    // form.submit();
  }
  // Validasi Select Box
  if (interestSelect.value === 'default') {
    interestError.textContent = 'Harap pilih minat Anda';
    interestSelect.classList.add('error-input');
  } else {
    interestError.textContent = '';
    interestSelect.classList.remove('error-input');
  }

  // Jika formulir valid, Anda dapat mengirimkannya ke server di sini
  if (nameInput.value.trim() !== '' && emailPattern.test(emailInput.value.trim()) && interestSelect.value !== 'default') {
     console.log('Nama:', nameInput.value.trim());
     console.log('Email:', emailInput.value.trim());
     console.log('Minat:', interestSelect.value);
  }
});

