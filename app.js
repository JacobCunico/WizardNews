const express = require("express");
const app = express();
const path = require('path');
const postBank = require("./postBank");
const PORT = 1337;

app.use('/', express.static(path.join(__dirname,'public')) )

app.get('/', (req, res,) => {
  const posts = postBank.list();
  const html = `<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${posts.map(post => `
      <a href="/posts/${post.id}">${post.title}</a>
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            ${post.title}
            <small>(by ${post.name})</small>
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
</html>`;

  res.send(html);
})

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id)
  if (!post.id) {
    throw new Error('Not Found')
  }
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <title>Wizard News ${post.id}</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span>
          ${post.title}
          <small>(by ${post.name})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${post.date}
        </small>
      </div>
    </body>
  </html>`);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(404).send('404 Error: Page Not Found')
})

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});