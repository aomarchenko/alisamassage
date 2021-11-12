const appointmentBacdrop = document.querySelector('.appointment__backdrop');
const body = document.querySelector('body');
const closeappointmentBtn = document.querySelector('.appointment__modal--btn-close');
const formTitle = document.querySelector('.appointment__title');
const formPage = document.querySelector('.appointment__page');
const appointmentButton = document.querySelector('.header-button');
const appointmentForm = document.querySelector('.appointment');
const statusPage = document.querySelector('.success-status-on-form');
const giftDescription = document.querySelector('.js-gift-description');
const firstItem = document.querySelector('.js-first-item');
const secondItem = document.querySelector('.js-second-item');
const thirdItem = document.querySelector('.js-third-item');
const fourthItem = document.querySelector('.js-fourth-item');
const fifthItem = document.querySelector('.js-fifth-item');
const sixthItem = document.querySelector('.js-sixth-item');
const modalList = document.querySelector('.js-modal-list');

appointmentButton.addEventListener('click', openModal);

const buynowBtn = document.querySelector('.content');
buynowBtn.addEventListener('click', openModal);

function openModal(event) {
  statusPage.innerHTML = '';
  if (event.target.classList.contains('js-buy-now-btn')) {
    modalList.classList.remove('sub-list');
    formTitle.textContent = 'Cadeaubon';
    giftDescription.textContent =
      'Ik wil een cadeaubon kopen van ( 25; 35;50;100 EUR. schrijf het gewenste bedrag op.)';
    formPage.textContent = '';
    firstItem.textContent = '';
    secondItem.textContent = '';
    thirdItem.textContent = '';
    fourthItem.textContent = '';
    fifthItem.textContent = '';
    sixthItem.textContent = '';

    // formPage.textContent = 'Bedrag 15. 25. 35. 50. 100. EUR:';
  } else if (event.target.classList.contains('header-button')) {
    formTitle.textContent = 'AFSPRAAK MAKEN';
    formPage.textContent = 'Wat kun je van mij verwachten en wat verwacht ik van jou?';
    firstItem.textContent =
      ' Bij de eerste afspraak zal ik, passend bij de beoogde behandeling, een kort intakegesprek met je houden om nader kennis te maken en om een beeld te krijgen van je gezondheid';
    secondItem.textContent =
      'Met je medische en persoonlijke gegevens ga ik vertrouwelijk om en zal deze nooit zonder je toestemming aan derden verstrekken';
    thirdItem.textContent =
      'Mijn massages en behandelingen kunnen een heel goede aanvulling zijn op de reguliere gezondheidszorg. Bij twijfel of ernstige klachten zal ik je altijd aanraden eerst naar je huisarts te gaan, want jouw gezondheid staat voorop.';
    fourthItem.textContent =
      'Als je al onder behandeling staat van een arts, therapeut of specialist, overleg dan altijd eerst of een massage toegestaan is';
    fifthItem.textContent =
      'Neem voorafgaand aan je behandeling thuis een douche; dit is prettig voor jezelf en voor mij';
    sixthItem.textContent = 'Mijn behandelingen worden niet vergoed door zorgverzekeringen.';
  } else {
    return;
  }

  event.preventDefault();
  appointmentBacdrop.classList.remove('is-hidden');
  body.style.overflow = 'hidden';
  closeappointmentBtn.addEventListener('click', onCloseBtn);
  appointmentBacdrop.addEventListener('click', onBackdrop);
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
