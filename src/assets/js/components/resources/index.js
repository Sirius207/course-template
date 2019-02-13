import marked from 'marked';
import resourcesData from '../../../data/content/resourcesData';


function renderResources(resources) {
  return `
  <section id="course-resources" class="course-resources">
    <div class="container">
      <h2>Resources</h2>
      <div>${marked(resources)}</div>
    </div>
  </section>
  `;
}

export default function getResourcesDom() {
  return renderResources(resourcesData);
}
