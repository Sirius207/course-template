import $ from 'jquery';
import getScheduleTableDom from './components/schedule';

(() => {
  const tableDom = getScheduleTableDom();
  $('#course-announcements').append(tableDom);
})();
