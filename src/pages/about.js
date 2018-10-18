import 'styles/index';
import Intro from 'components/intro';

const aboutMarkup = `
  <div class="container">
    <h1>About Page</h1>
  </div>
  ${Intro({
    title: 'Intro components with different content',
    description:
      'This is the same component used in Index Page, but with different content!'
  })}
`;

document.addEventListener('DOMContentLoaded', function() {
  document.body.innerHTML = aboutMarkup;
});
