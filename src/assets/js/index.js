import $ from 'jquery';

import getHeaderDom from './components/header';
import getInfoSectionDom from './components/information';
import getNewsDom from './components/announcements';
import getScheduleTableDom from './components/schedule';
import getResourcesDom from './components/resources';

function getFullDom() {
  const headerDom = getHeaderDom();
  const infoDom = getInfoSectionDom();
  const newsDom = ''; // getNewsDom();
  const tableDom = getScheduleTableDom();
  const resourcesDom = getResourcesDom();
  const fullDom = `${headerDom}${infoDom}${newsDom}${tableDom}${resourcesDom}`;
  return fullDom;
}

function renderPage() {
  const fullDom = getFullDom();
  $('body').prepend(fullDom);
  $('.loader').remove();
}

$(document).ready(() => {
  renderPage();
});
