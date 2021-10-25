import priceList from '../partials/price-list.html';
// import '../partials/header';
const priceListBtn = document.querySelector('.js-price-list');
const homeBtn = document.querySelector('.js-home');
const renderContainer = document.querySelector('.content');
priceListBtn.addEventListener('click', priceListRender);

function priceListRender(e) {
  e.preventDefault;
  homeBtn.classList.remove('current');
  priceListBtn.classList.add('current');
  renderContainer.innerHTML = priceList;
}
