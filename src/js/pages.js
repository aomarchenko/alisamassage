import priceList from '../partials/price-list.html';
import home from '../partials/home.html';
import news from '../partials/news.html';
import aboutMe from '../partials/about-me.html';
import video from '../partials/video.html';
import gift from '../partials/gift-sertificate.html';
// import '../partials/header';
const priceListBtn = document.querySelector('.js-price-list');
const homeBtn = document.querySelector('.js-home');
const newsBtn = document.querySelector('.js-news');
const aboutMeBtn = document.querySelector('.js-about-me');
const renderContainer = document.querySelector('.content');
const navigation = document.querySelector('.nav-list');
const videoBtn = document.querySelector('.js-video');
const giftbtn = document.querySelector('.js-gift-sertificate');

navigation.addEventListener('click', currentPageToggle);
// const currentActivePage = document.querySelector('.nav-link.current');
giftbtn.addEventListener('click', giftPageRender);
videoBtn.addEventListener('click', videoPageRender);
priceListBtn.addEventListener('click', priceListRender);
homeBtn.addEventListener('click', homePageRender);
newsBtn.addEventListener('click', newsPageRender);
aboutMeBtn.addEventListener('click', aboutMePageRender);
renderContainer.innerHTML = home;

function currentPageToggle(e) {
  if (!e.target.classList.contains('nav-link')) {
    return;
  }

  const links = document.querySelectorAll('.nav-link');
  for (const link of links) {
    link.classList.remove('current');
  }
  e.target.classList.add('current');
}
function priceListRender(e) {
  e.preventDefault;
  console.log();

  renderContainer.innerHTML = priceList;
}
function homePageRender(e) {
  e.preventDefault;
  currentPageToggle(e);
  //   homeBtn.classList.remove('current');
  renderContainer.innerHTML = home;
}
function newsPageRender(e) {
  e.preventDefault;

  renderContainer.innerHTML = news;
}

function aboutMePageRender(e) {
  e.preventDefault;

  renderContainer.innerHTML = aboutMe;
}
function videoPageRender(e) {
  renderContainer.innerHTML = video;
}
function giftPageRender(e) {
  renderContainer.innerHTML = gift;
}
