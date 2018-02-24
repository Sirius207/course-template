import getNavDom from './nav';
import getJumboDom from './jumbo';


function renderHeader(nav, jumbo) {
  return `<header>${nav}${jumbo}</header>`;
}

export default function getHeaderDom() {
  const navDom = getNavDom();
  const jumboDom = getJumboDom();
  return renderHeader(navDom, jumboDom);
}
