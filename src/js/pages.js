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
const mobileMenuBtn = document.querySelector('.js-mobile-menu-button');
const mobMenu = document.querySelector('.js-mob-menu');
const mobileBacdrop = document.querySelector('.mobile__backdrop');
const closeMobileBtn = document.querySelector('.mobile__modal--btn-close');
const body = document.querySelector('body');

const priceListBtnMob = document.querySelector('.js-price-list-mobile');
const homeBtnMob = document.querySelector('.js-home-mobile');
const newsBtnMob = document.querySelector('.js-news-mobile');
const aboutMeBtnMob = document.querySelector('.js-about-me-mobile');
const giftBtnMob = document.querySelector('.js-gift-sertificate-mobile');
const contactBtnMob = document.querySelector('.js-contacts-mobile');
const massagesBtnMob = document.querySelector('.js-massages-mobile');
const wellnessBtnMob = document.querySelector('.js-wellness-mobile');
const bodyEstetikBtnMob = document.querySelector('.js-body-estetic-mobile');
const gezichtsMassageBtnMob = document.querySelector('.js-gezichtsmassage-mobile');
const spaPedicureBtnMob = document.querySelector('.js-spa-pedicure-mobile');
const bodyDetoxBtnMob = document.querySelector('.js-body-detox-mobile');
const oorkaarsenBtnMob = document.querySelector('.js-oorkaarsen-mobile');
const apparaatMassageBtnMob = document.querySelector('.js-apparat-massage-mobile');
const cosmeticaBtnMob = document.querySelector('.js-cosmetica-mobile');
const restrictionsBtnMob = document.querySelector('.js-restrictions-mobile');

navigation.addEventListener('click', currentPageToggle);

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
mobileMenuBtn.addEventListener('click', mobileMenuOpen);

giftBtnMob.addEventListener('click', giftPageRender);
priceListBtnMob.addEventListener('click', priceListRender);
homeBtnMob.addEventListener('click', homePageRender);
newsBtnMob.addEventListener('click', newsPageRender);
aboutMeBtnMob.addEventListener('click', aboutMePageRender);
contactBtnMob.addEventListener('click', contactPageRender);
massagesBtnMob.addEventListener('click', massagesPageRender);
wellnessBtnMob.addEventListener('click', wellnessPageRender);
bodyEstetikBtnMob.addEventListener('click', bodyEsteticPageRender);
gezichtsMassageBtnMob.addEventListener('click', gezichtsMassagePageRender);
spaPedicureBtnMob.addEventListener('click', spaPedicurePageRender);
bodyDetoxBtnMob.addEventListener('click', bodyDetoxPageRender);
oorkaarsenBtnMob.addEventListener('click', oorkaarsenPageRender);
apparaatMassageBtnMob.addEventListener('click', apparaatMassagePageRender);
cosmeticaBtnMob.addEventListener('click', cosmeticaPageRender);
restrictionsBtnMob.addEventListener('click', restrictionsPageRender);

renderContainer.innerHTML = home;

function mobileMenuOpen(e) {
  e.preventDefault();
  mobMenu.classList.remove('is-hidden');
  body.style.overflow = 'hidden';
  closeMobileBtn.addEventListener('click', onCloseBtn);
}
function closeModal() {
  body.style.overflow = 'visible';
  mobileBacdrop.classList.add('is-hidden');

  closeMobileBtn.removeEventListener('click', onCloseBtn);
}
function onCloseBtn() {
  closeModal();
}

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
  closeModal();
}

function homePageRender(e) {
  e.preventDefault;
  currentPageToggle(e);
  renderContainer.innerHTML = home;
  closeModal();
}
function newsPageRender(e) {
  e.preventDefault;
  renderContainer.innerHTML = news;
  closeModal();
}

function aboutMePageRender(e) {
  e.preventDefault;
  renderContainer.innerHTML = aboutMe;
  closeModal();
}

function videoPageRender(e) {
  renderContainer.innerHTML = video;
  closeModal();
}

function giftPageRender(e) {
  renderContainer.innerHTML = gift;
  closeModal();
}

function contactPageRender(e) {
  renderContainer.innerHTML = contact;
  closeModal();
}

function massagesPageRender(e) {
  renderContainer.innerHTML = massages;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function wellnessPageRender(e) {
  renderContainer.innerHTML = wellness;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function bodyEsteticPageRender(e) {
  renderContainer.innerHTML = bodyEstetic;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function gezichtsMassagePageRender(e) {
  renderContainer.innerHTML = gezichtsMassage;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function spaPedicurePageRender(e) {
  renderContainer.innerHTML = spaPedicure;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function bodyDetoxPageRender(e) {
  renderContainer.innerHTML = bodyDetox;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function oorkaarsenPageRender(e) {
  renderContainer.innerHTML = oorkaarsen;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function apparaatMassagePageRender(e) {
  renderContainer.innerHTML = apparaatMassage;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function cosmeticaPageRender(e) {
  renderContainer.innerHTML = cosmetica;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}

function restrictionsPageRender(e) {
  renderContainer.innerHTML = restrictions;
  currentPageToggleSideMenu(e);
  window.scrollTo(0, 0);
  closeModal();
}
