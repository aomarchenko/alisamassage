import priceList from '../partials/price-list.html';
import home from '../partials/home.html';
import news from '../partials/news.html';
import aboutMe from '../partials/about-me.html';
import video from '../partials/video.html';
import gift from '../partials/gift-sertificate.html';
import contact from '../partials/contact.html';
import massages from '../partials/massages.html';
import wellness from '../partials/wellness.html';
import bodyEstetic from '../partials/body-estetik-massage.html';
import gezichtsMassage from '../partials/gezichtsmassage.html';
import spaPedicure from '../partials/spa-pedicure.html';
import bodyDetox from '../partials/body-detox-voetenbad.html';
import oorkaarsen from '../partials/oorkaarsen.html';
import apparaatMassage from '../partials/oog-apparaat-massage.html';
import cosmetica from '../partials/cosmetica.html';
import restrictions from '../partials/restrictions-for-massage.html';
// import feedback from '../partials/feedback.html';
import { opts, spinner, target } from './spinner';

// import '../partials/header';
const priceListBtn = document.querySelector('.js-price-list');
const homeBtn = document.querySelector('.js-home');
const newsBtn = document.querySelector('.js-news');
const aboutMeBtn = document.querySelector('.js-about-me');
const renderContainer = document.querySelector('.content');
const navigation = document.querySelector('.nav-list');
const videoBtn = document.querySelector('.js-video');
const giftbtn = document.querySelector('.js-gift-sertificate');
const contactBtn = document.querySelector('.js-contacts');
const massagesBtn = document.querySelector('.js-massages');
const wellnessBtn = document.querySelector('.js-wellness');
const bodyEstetikBtn = document.querySelector('.js-body-estetic');
const gezichtsMassageBtn = document.querySelector('.js-gezichtsmassage');
const spaPedicureBtn = document.querySelector('.js-spa-pedicure');
const bodyDetoxBtn = document.querySelector('.js-body-detox');
const oorkaarsenBtn = document.querySelector('.js-oorkaarsen');
const apparaatMassageBtn = document.querySelector('.js-apparat-massage');
const cosmeticaBtn = document.querySelector('.js-cosmetica');
const restrictionsBtn = document.querySelector('.js-restrictions');
const headerLogo = document.querySelector('.js-logo');
const headerbtn = document.querySelector('.js-header-button');
// const feedbackBtn = document.querySelector('.js-feedback');
// const leaveFeedbackBtn = document.querySelector('.content');
// const feedbackContainer = document.querySelector('.js-feedback-container');
// const feedbackForm = document.querySelector('.content');
// const feedbackList = document.querySelector('.feedback-list');

navigation.addEventListener('click', currentPageToggle);
// const currentActivePage = document.querySelector('.nav-link.current');

giftbtn.addEventListener('click', giftPageRender);
// videoBtn.addEventListener('click', videoPageRender);
priceListBtn.addEventListener('click', priceListRender);
homeBtn.addEventListener('click', homePageRender);
newsBtn.addEventListener('click', newsPageRender);
aboutMeBtn.addEventListener('click', aboutMePageRender);
contactBtn.addEventListener('click', contactPageRender);
massagesBtn.addEventListener('click', massagesPageRender);
wellnessBtn.addEventListener('click', wellnessPageRender);
bodyEstetikBtn.addEventListener('click', bodyEsteticPageRender);
gezichtsMassageBtn.addEventListener('click', gezichtsMassagePageRender);
spaPedicureBtn.addEventListener('click', spaPedicurePageRender);
bodyDetoxBtn.addEventListener('click', bodyDetoxPageRender);
oorkaarsenBtn.addEventListener('click', oorkaarsenPageRender);
apparaatMassageBtn.addEventListener('click', apparaatMassagePageRender);
cosmeticaBtn.addEventListener('click', cosmeticaPageRender);
restrictionsBtn.addEventListener('click', restrictionsPageRender);
// feedbackBtn.addEventListener('click', feedbackPageRender);
// leaveFeedbackBtn.addEventListener('click', feedbackRender);
renderContainer.innerHTML = home;

function currentPageToggle(e) {
  if (!e.target.classList.contains('nav-link')) {
    return;
  }

  const links = document.querySelectorAll('.nav-link');
  for (const link of links) {
    link.classList.remove('current');
  }
  const sideLinks = document.querySelectorAll('.side-menu-link');
  for (const link of sideLinks) {
    link.classList.remove('side-menu-link-active');
  }
  e.target.classList.add('current');
}

function currentPageToggleSideMenu(e) {
  if (!e.target.classList.contains('side-menu-link')) {
    return;
  }

  const links = document.querySelectorAll('.nav-link');
  for (const link of links) {
    link.classList.remove('current');
  }
  const sideLinks = document.querySelectorAll('.side-menu-link');
  for (const link of sideLinks) {
    link.classList.remove('side-menu-link-active');
  }
  console.log(e.target);
  e.target.classList.add('side-menu-link-active');
}
function animateHeader(e) {
  headerLogo.classList.add('logo-is-animated');
  headerbtn.classList.add('header-button-is-animated');
}
animateHeader();
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
function contactPageRender(e) {
  renderContainer.innerHTML = contact;
}
function massagesPageRender(e) {
  renderContainer.innerHTML = massages;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function wellnessPageRender(e) {
  renderContainer.innerHTML = wellness;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function bodyEsteticPageRender(e) {
  renderContainer.innerHTML = bodyEstetic;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function gezichtsMassagePageRender(e) {
  renderContainer.innerHTML = gezichtsMassage;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function spaPedicurePageRender(e) {
  renderContainer.innerHTML = spaPedicure;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function bodyDetoxPageRender(e) {
  renderContainer.innerHTML = bodyDetox;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function oorkaarsenPageRender(e) {
  renderContainer.innerHTML = oorkaarsen;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function apparaatMassagePageRender(e) {
  renderContainer.innerHTML = apparaatMassage;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function cosmeticaPageRender(e) {
  renderContainer.innerHTML = cosmetica;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
function restrictionsPageRender(e) {
  renderContainer.innerHTML = restrictions;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
}
// function feedbackPageRender(e) {
//   renderContainer.innerHTML = feedback;

//   currentPageToggleSideMenu(e);
// }
// const storage = [];
// function feedbackRender(e) {
//   e.preventDefault();
//   // storage.push(e.target.closest('.feedback-form').childNodes[5].value);
//   // console.log(storage);
//   // e.target.closest('.feedback-form').childNodes[1].innerHTML = storage;
//   //   e.target.closest('.feedback-form').childNodes[5].value;
//   // console.log(e.target.closest('.feedback-form').childNodes[1]);
// }
