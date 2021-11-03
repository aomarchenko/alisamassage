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

navigation.addEventListener('click', currentPageToggle);
// const currentActivePage = document.querySelector('.nav-link.current');

giftbtn.addEventListener('click', giftPageRender);
videoBtn.addEventListener('click', videoPageRender);
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
function contactPageRender(e) {
  renderContainer.innerHTML = contact;
}
function massagesPageRender(e) {
  renderContainer.innerHTML = massages;
  currentPageToggle(e);
}
function wellnessPageRender(e) {
  renderContainer.innerHTML = wellness;
  currentPageToggle(e);
}
function bodyEsteticPageRender(e) {
  renderContainer.innerHTML = bodyEstetic;
  currentPageToggle(e);
}
function gezichtsMassagePageRender(e) {
  renderContainer.innerHTML = gezichtsMassage;
  currentPageToggle(e);
}
function spaPedicurePageRender(e) {
  renderContainer.innerHTML = spaPedicure;
  currentPageToggle(e);
}
function bodyDetoxPageRender(e) {
  renderContainer.innerHTML = bodyDetox;
  currentPageToggle(e);
}
function oorkaarsenPageRender(e) {
  renderContainer.innerHTML = oorkaarsen;
  currentPageToggle(e);
}
function apparaatMassagePageRender(e) {
  renderContainer.innerHTML = apparaatMassage;
  currentPageToggle(e);
}
function cosmeticaPageRender(e) {
  renderContainer.innerHTML = cosmetica;
  currentPageToggle(e);
}
function restrictionsPageRender(e) {
  renderContainer.innerHTML = restrictions;
  currentPageToggle(e);
}
