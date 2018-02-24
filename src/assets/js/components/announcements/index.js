import newsData from '../../../data/content/2018/announcementsData';


function renderNewsItem(news) {
  return `
    <li class="listItem" data-toggle="modal" data-target="#${news.date}-modal">
      <div class="listItem-index">
        ${news.date}
      </div>
      <!-- Button trigger modal -->
      <div class="listItem-content">
        ${news.title}
      </div>
      <!-- Modal -->
      <div class="modal fade" id="${news.date}-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${news.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${news.content}
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
