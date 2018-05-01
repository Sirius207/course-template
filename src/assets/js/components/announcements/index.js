import marked from 'marked';
import newsData from '../../../data/content/2018/announcementsData';


function renderNewsContent(news) {
  return `
    <li class="listItem" data-toggle="modal" data-target="#${news.title}-modal">
      <div class="listItem-index">
        ${news.date}
      </div>
      <!-- Button trigger modal -->
      <div class="listItem-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
          <path d="M3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1.5 2.5c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5s.5.22.5.5-1 1.64-1 2.5c0 .86.67 1.5 1.5 1.5s1.5-.67 1.5-1.5h-1c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-.36 1-1.84 1-2.5 0-.81-.67-1.5-1.5-1.5z" transform="translate(2)"/>
        </svg>
        - ${news.title}
      </div>
      <!-- Modal -->
      <div class="modal fade" id="${news.title}-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${news.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${marked(news.content)}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
}

function renderNewsUrl(news) {
  return `
    <li class="listItem">
      <div class="listItem-index">
        ${news.date}
      </div>
      <div class="listItem-content">
        <a href="${news.url}">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
            <path d="M5.88.03c-.18.01-.36.03-.53.09-.27.1-.53.25-.75.47a.5.5 0 1 0 .69.69c.11-.11.24-.17.38-.22.35-.12.78-.07 1.06.22.39.39.39 1.04 0 1.44l-1.5 1.5c-.44.44-.8.48-1.06.47-.26-.01-.41-.13-.41-.13a.5.5 0 1 0-.5.88s.34.22.84.25c.5.03 1.2-.16 1.81-.78l1.5-1.5c.78-.78.78-2.04 0-2.81-.28-.28-.61-.45-.97-.53-.18-.04-.38-.04-.56-.03zm-2 2.31c-.5-.02-1.19.15-1.78.75l-1.5 1.5c-.78.78-.78 2.04 0 2.81.56.56 1.36.72 2.06.47.27-.1.53-.25.75-.47a.5.5 0 1 0-.69-.69c-.11.11-.24.17-.38.22-.35.12-.78.07-1.06-.22-.39-.39-.39-1.04 0-1.44l1.5-1.5c.4-.4.75-.45 1.03-.44.28.01.47.09.47.09a.5.5 0 1 0 .44-.88s-.34-.2-.84-.22z"/>
          </svg>
          - ${news.title}
        </a>
      </div>
      </a>
    </li>`;
}

function renderNewsItem(news) {
  return (news.content) ? renderNewsContent(news) : renderNewsUrl(news);
}

function renderNewsList() {
  return newsData.map(renderNewsItem).join('');
}

function renderNews(newsList) {
  return `
    <section id="course-announcements" class="course-announcements">
      <div class="container">
        <h2>Announcements</h2>
        <ul class="newsList">
          ${newsList}
        </ul>
      </div>
    </section>
  `;
}

export default function getNewsDom() {
  const newsList = renderNewsList();
  const newsDom = renderNews(newsList);
  return newsDom;
}
