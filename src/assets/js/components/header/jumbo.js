import infoData from '../../../data/content/infoData';


function renderJumbo(info) {
  return `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="text-title">${info.title}</h1>
      <h2>Spring 2018, National Cheng Kung University</h2>
      <p class="text-description">${info.description}</p>
    </div>
  </div>
  `;
}

export default function getJumboDom() {
  return renderJumbo(infoData);
}
