import infoData from '../../../data/content/2018/infoData';


function renderMailIcon(email) {
  return `<a href="mailto:${email}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg></a>&nbsp`;
}

function renderTeacherItem(teacher) {
  return `
  <div class="teachers-avatar">
      <div class="avatar">
        <img src="${teacher.image}" alt="${teacher.name}">
      </div>
      <div class="teacher-info">
        ${(teacher.email) ? renderMailIcon(teacher.email) : ''}
        <a href="${teacher.url}" class="teacher-name">
          <p>
            ${teacher.name}<br>
          </p>
        </a>
      </div>
  </div>`;
}

function renderTeachersList(instructorList, assistantsList) {
  return `
  <div class="info-teachers row">
    <div class="teacher-instructor col-md-4">
      <h2>Instructors</h2>
      ${instructorList}
    </div>
    <div class="teacher-box col-md-8">
      <h2>Teaching Assistants</h2>
      ${assistantsList}
    </div>
  </div>
  `;
}

export default function getTeachersDom() {
  const instructorList = infoData.teachers.instructors.map(renderTeacherItem).join('');
  const assistantsList = infoData.teachers.assistants.map(renderTeacherItem).join('');
  return renderTeachersList(instructorList, assistantsList);
}
