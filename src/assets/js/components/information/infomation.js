import infoData from '../../../data/content/infoData';

function renderInfoItem(info) {
  return `
  <div class="general-time listItem col-md-6">
    <div class="listItem-content">
      <h2>${info.icon}${info.title}</h2>
      <p>${info.content}
      </p>
    </div>
  </div>
  `;
}

function renderInfoList(InfoList) {
  return `<div class="info-general list row">${InfoList}</div>`;
}

export default function getInfoDom() {
  const InfoList = infoData.info.map(renderInfoItem).join('');
  return renderInfoList(InfoList);
}
