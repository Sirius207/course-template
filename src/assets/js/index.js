import $ from 'jquery';
import getNewsDom from './components/announcements';
import getScheduleTableDom from './components/schedule';
import getResourcesDom from './components/resources';

function renderPage() {
  const newsDom = getNewsDom();
  const tableDom = getScheduleTableDom();
  const resourcesDom = getResourcesDom();
  const fullDom = `${newsDom}${tableDom}${resourcesDom}`;
  return fullDom;
}

(() => {
  const fullDom = renderPage();
  $('#course-info').append(fullDom);
})();
