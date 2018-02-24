import infoData from '../../../data/content/2018/infoData';

function renderTeacherItem(teacher) {
  return `
  <div class="teachers-avatar">
    <a href="${teacher.url}">
      <div class="avatar">
        <img src="${teacher.image}" alt="${teacher.name}">
      </div>
      <p class="teacher-name">
        ${teacher.name}
      </p>
    </a>
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
