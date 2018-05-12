const requestURL = 'https://raw.githubusercontent.com/finderau/recruitment/master/front-end/design-and-js/01-page-layout-listing/data.json';
let article;
let story;
let header;
let snippet;

const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const results = request.response;
  populateArticles(results);
}

function populateArticles(jsonObj) {
articles = document.querySelector('#articles')

  for (let i = 0; i < 5; i++) {
    container = document.createElement('div');
    container.setAttribute('class', 'individual-post');
    story = jsonObj[i];

    header = document.createElement('a');
    header.innerHTML = `${story.title}`;
    header.setAttribute('href', `${story.url}`);
    snippet = document.createElement('p');
    snippet.innerText = `${story.description}`;

    container.appendChild(header);
    container.appendChild(snippet);
    articles.appendChild(container);
  }
}
