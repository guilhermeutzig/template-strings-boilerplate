# Template Strings Boilerplate

A simple boilerplate using ES6 Template Strings. You can create reusable components to speed up your development process. If you want something simple and fast, this is indicated to you!

# Stack

- Javascript ES6
- Webpack 4
- Babel
- SCSS
- HTTP Server

# Commands

### Installation

```sh
npm install or yarn
```

### Run the project

```sh
npm run dev or yarn dev
```

### Create a local server with builded files

```sh
npm run serve or yarn serve
```

### Production build

```sh
npm run build or yarn build
```

# Pages creation

On the root folder of the project, there is a file named `pages.json`. Inside it you can declare what pages will exist in the project with their respective meta tags.

After that, just create a HTML and JS file on `src/pages` folder and you are all set!

# Components creation

I've created an example inside `src/components` folder, named `Intro`.

Intro component is made out of a `const` that receives an `arrow function`. You can use the power of ES6 to manipulate props that components will use, like this:

```sh
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
```

# Observations

You can do whatever you want with this boiler since it's simple Javascript! The ideia of this `mini-project` is literally speed up your development proccess.

If you have any suggestions, please contact me and we will work on it!
