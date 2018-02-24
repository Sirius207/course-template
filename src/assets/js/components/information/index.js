import getTeachersDom from './teachers';
import getInfoDom from './infomation';

function renderInfoSectionDom(teacher, info) {
  return `
    <section id="course-info" class="course-info">
      <div class="container">
      ${teacher}
      ${info}
      </div>
    </section>`;
}

export default function getInfoSectionDom() {
  const teacherDom = getTeachersDom();
  const infoDom = getInfoDom();
  return renderInfoSectionDom(teacherDom, infoDom);
}
