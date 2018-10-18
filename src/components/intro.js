const Intro = (
  props = {
    title: 'Intro component',
    description:
      'This is just an example of component created with default props'
  }
) =>
  `
  <div class="intro">
    <div class="container">
      <h1>${props.title}</h1>
      <p>${props.description}</p>
    <div>
  </div>
  `;

export default Intro;
