import marked from 'marked';
import scheduleData from '../../../data/content/2018/scheduleData';

/* *
 * Thead List
 *
 * */
function renderTheadListItem(title) {
  return ` <th scope="col">${title}</th>`;
}

function renderTheadList() {
  return scheduleData.columnTitle.map(renderTheadListItem).join('');
}

/* *
 * Tbody List
 *
 * */
function renderTbodyListItem(lecture, index) {
  return `
    <tr>
      <th data-title="Week" data-date="${lecture.date}" scope="row">Week ${index + 1}</th>
      <td data-title="Date" class="mobile--hide">${lecture.date}</td>
      <td data-title="Description">${marked(lecture.description)}</td>
      <td data-title="Technical Lecture">${marked(lecture.reading)}</td>
    </tr>
  `;
}

function renderTbodyList() {
  return scheduleData.rowData.map(renderTbodyListItem).join('');
}


/* *
 * Full Table
 *
 * */
function renderTable(theadList, tbodyList) {
  return `
    <section id="course-schedule" class="course-schedule">
      <div class="container">
        <h2>Schedule</h2>
        <table class="table">
          <thead>
            <tr>
              ${theadList}
            </tr>
          </thead>
          <tbody>
            ${tbodyList}
          </tbody>
        </table>
      </div>
    </section>
    `;
}

export default function getScheduleTableDom() {
  const theadList = renderTheadList();
  const tbodyList = renderTbodyList();
  const tableDom = renderTable(theadList, tbodyList);
  return tableDom;
}
