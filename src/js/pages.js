import priceList from '../partials/price-list.html';
import home from '../partials/home.html';
// import '../partials/header';
const priceListBtn = document.querySelector('.js-price-list');
const homeBtn = document.querySelector('.js-home');
const renderContainer = document.querySelector('.content');
const navigation = document.querySelector('.nav-list');
navigation.addEventListener('click', currentPageToggle);
// const currentActivePage = document.querySelector('.nav-link.current');
priceListBtn.addEventListener('click', priceListRender);
homeBtn.addEventListener('click', homePageRender);
renderContainer.innerHTML = home;

function currentPageToggle(e) {
  //   console.log(e.target);
  //   if (!e.target.classList.contains('nav-link')) {
  //     return;
  //   }
  //   currentActivePage.classList.remove('current');
  //   e.currentTarget.classList.add('current');
  e.target.classList.add('current');
  //   e.target.classList.remove('current');
}
function priceListRender(e) {
  currentPageToggle();
  e.preventDefault;
  console.log();

  //   e.target.classList.toggle('current');

  renderContainer.innerHTML = priceList;
}
function homePageRender(e) {
  e.preventDefault;
  currentPageToggle(e);
  //   homeBtn.classList.remove('current');
  renderContainer.innerHTML = home;
}
