const apiKey = '3390bf511ce340d5ad6db41d58563f14';
const url = `https://newsapi.org/v2/top-headlines?category=technology&pageSize=7&apiKey=${apiKey}`;
// const cacheKey = 'programmingNews';
// const cacheExpiry = 60 * 60 * 1000;

export async function fetchProgrammingNews() {
  try {
      const response = await fetch(url);
      console.log('Response Status:', response.status); // Log the status code
      if (!response.ok) {
          const errorText = await response.text(); // Log the error response
          throw new Error(`Network response was not ok: ${errorText}`);
      }
      const data = await response.json();
      displayNews(data.articles.slice(1, 7));  // Select only the first 6 articles
  } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
  }
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');
        articleElement.innerHTML = `
          <img src="${article.urlToImage}" alt="News Image" class="news-image">
          <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
          <small>Published on: ${new Date(article.publishedAt).toLocaleString('default', { month: 'numeric', year: 'numeric' })}</small>
        `;
        newsContainer.appendChild(articleElement);
    });
}

fetchProgrammingNews();