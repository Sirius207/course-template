import infoData from '../../../data/content/2018/infoData';

function renderNavItem(navData) {
  return `
    <li class="nav-item">
      <a class="nav-link" href="${navData.url}">${navData.name}</a>
    </li>`;
}

function renderNavList() {
  return infoData.nav.map(renderNavItem).join('');
}

function renderNav(navList) {
  return `
    <nav>
        <div class="container">
          <ul class="nav justify-content-end">
            ${navList}
          </ul>
        </div>
    </nav>`;
}

export default function getNavDom() {
  const navList = renderNavList();
  return renderNav(navList);
}
