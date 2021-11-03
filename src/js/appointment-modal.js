const appointmentBacdrop = document.querySelector('.appointment__backdrop');
const body = document.querySelector('body');
const closeappointmentBtn = document.querySelector('.appointment__modal--btn-close');
const formTitle = document.querySelector('.appointment__title');
const formPage = document.querySelector('.appointment__page');
// const appointmentLink = document.querySelector('.js-button-appointment');
const appointmentButton = document.querySelector('.header-button');
const appointmentForm = document.querySelector('.appointment');
const statusPage = document.querySelector('.success-status-on-form');
appointmentButton.addEventListener('click', openModal);

const buynowBtn = document.querySelector('.content');
buynowBtn.addEventListener('click', openModal);

function openModal(event) {
  statusPage.innerHTML = '';
  if (event.target.classList.contains('js-buy-now-btn')) {
    formTitle.textContent = 'Cadeaubon';
    formPage.textContent = 'Bedrag 15. 25. 35. 50. 100. EUR:';
  } else if (event.target.classList.contains('header-button')) {
    formTitle.textContent = 'AFSPRAAK MAKEN';
    formPage.textContent =
      '? Hoe? Telefonisch, per e-mail of gebruik maken van het onderstaande contactformulier ? Wanneer? Op werkdagen tussen 10.00-21.00 uur ? Ik heb geen pin automaat, dus gelieve te betalen voor de dienst in contanten. ? Je 1e afspraak duur 15 minuten langer i.v.m. de kennismaking/intake';
  } else {
    return;
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
// ============
var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      status.innerHTML =
        'Hartelijk dank voor uw e-mail.  Ik neem zo snel mogelijk contact met u op.Met vriendelijke groet Alisa.';
      form.reset();
      setTimeout(closeModal, 5000);
    })
    .catch(error => {
      statusPage.classList.add('error-status-on-form');
      status.innerHTML =
        'Oops! het is niet gelukt !Controleer of het formulier correct ingevuld is.';
    });
}
form.addEventListener('submit', handleSubmit);
