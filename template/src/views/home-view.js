export const toHomeView = () => `
<div id="home">
  <h1>Mov(e)ster</h1>
  <div class="content">
    <p>Simple movie database app. You can:</p>
    <ul>
      <li>Browse categories</li>
      <li>Browse movies</li>
      <li>Add and remove movies from favorites</li>
      <li>Search for movies by title</li>
    </ul>
  </div>
</div>
`;

export const toTrendingView = (gifs) => `
<div id="trending">
  <h1>Trending Gifs</h1>
  <div class="content">
    ${gifs.map(gif => `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`).join('')}
  </div>
</div>
`;

