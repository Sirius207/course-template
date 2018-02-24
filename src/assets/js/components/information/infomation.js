import infoData from '../../../data/content/2018/infoData';

function renderInfoItem(info) {
  return `
  <div class="general-time listItem col-md-6">
    <div class="listItem-icon">
      <img src="./assets/media/open-iconic/svg/${info.icon}">
    </div>
    <div class="listItem-content">
      <h2>${info.title}</h2>
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
