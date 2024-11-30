// Отримуємо всі кнопки з класом "normal-button"
const openModalBtns = document.querySelectorAll('.normal-button');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById('auth-modal');

// Отримуємо форму та поля вводу
const authForm = document.getElementById('auth-form');
const fullName = document.getElementById('full-name');
const phoneNumber = document.getElementById('phone-number');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');

// Відкриття модального вікна для всіх кнопок з класом "normal-button"
openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Показуємо модальне вікно
  });
});

// Закриття модального вікна
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Приховуємо модальне вікно
});

// Закриття при кліку поза вмістом модального вікна
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Валідація форми
function validateForm() {
  let isValid = true;

  // Валідація повного імені (лише літери та пробіли)
  const nameRegex = /^[a-zA-Z\s]+$/; // Лише літери та пробіли
  if (!nameRegex.test(fullName.value.trim())) {
    nameError.textContent = 'Full Name cannot contain numbers or special characters.';
    nameError.style.display = 'block';
    fullName.classList.add('invalid');
    isValid = false;
  } else {
    nameError.style.display = 'none';
    fullName.classList.remove('invalid');
  }

  // Валідація номера телефону (лише цифри, від 10 до 15 символів)
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(phoneNumber.value.trim())) {
    phoneError.textContent = 'Enter a valid phone number (10 to 15 digits).';
    phoneError.style.display = 'block';
    phoneNumber.classList.add('invalid');
    isValid = false;
  } else {
    phoneError.style.display = 'none';
    phoneNumber.classList.remove('invalid');
  }

  return isValid;
}

// Подія надсилання форми
authForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Зупиняємо стандартне надсилання форми

  if (validateForm()) {
    alert('Form submitted successfully!');
    modal.style.display = 'none'; // Закриваємо модальне вікно після успішного заповнення
    authForm.reset(); // Очищаємо форму
  }
});
