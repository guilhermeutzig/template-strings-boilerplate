import 'styles/index';
import Intro from 'components/intro';

const markup = `
  <div class="container">
    <h1>Index Page</h1>
    <a class="link" href="/about" title="Check the about page!">Check the about page!</a>
  </div>
  ${Intro()}
`;

document.addEventListener('DOMContentLoaded', function() {
  document.body.innerHTML = markup;
});
