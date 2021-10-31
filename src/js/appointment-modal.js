const appointmentBacdrop = document.querySelector('.appointment__backdrop');
const body = document.querySelector('body');
const closeappointmentBtn = document.querySelector('.appointment__modal--btn-close');
const formTitle = document.querySelector('.appointment__title');
const formPage = document.querySelector('.appointment__page');
// const appointmentLink = document.querySelector('.js-button-appointment');
const appointmentButton = document.querySelector('.header-button');
const appointmentForm = document.querySelector('.appointment');
appointmentButton.addEventListener('click', openModal);

const buynowBtn = document.querySelector('.content');
buynowBtn.addEventListener('click', openModal);

function openModal(event) {
  if (event.target.classList.contains('js-buy-now-btn')) {
    formTitle.textContent = 'Cadeaubon';
    formPage.textContent = 'Bedrag 15. 25. 35. 50. 100. EUR:';
  }

  event.preventDefault();
  appointmentBacdrop.classList.remove('is-hidden');
  body.style.overflow = 'hidden';
  closeappointmentBtn.addEventListener('click', onCloseBtn);
  appointmentBacdrop.addEventListener('click', onBackdrop);
  //   appointmentLink.removeEventListener('click', openModal);
  window.addEventListener('keydown', onEsc);
}

function closeModal() {
  body.style.overflow = 'visible';
  appointmentBacdrop.classList.add('is-hidden');

  closeappointmentBtn.removeEventListener('click', onCloseBtn);
  window.removeEventListener('keydown', onEsc);
  appointmentBacdrop.removeEventListener('click', onBackdrop);
}
function onCloseBtn() {
  closeModal();
}

function onBackdrop(e) {
  if (!e.target.classList.contains('appointment__backdrop')) {
    return;
  }
  closeModal();
}

function onEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
