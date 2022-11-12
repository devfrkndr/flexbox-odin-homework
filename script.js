'use strict';

// create navigation section
const navFragment = document.createDocumentFragment();

// create navigation elements and add classes and contents
const nav = document.createElement('nav');
nav.classList.add('navbar');

const container = document.createElement('div');
container.classList.add('container');

const logo = document.createElement('p');
logo.innerText = 'Header Logo';
logo.classList.add('logo');

const listNav = document.createElement('ul');
listNav.classList.add('listnav');

const navBarList = ['header link one', 'header link two', 'header link three'];

navBarList.forEach((e) => {
  const listElement = document.createElement('li');
  listElement.textContent = e;
  listNav.append(listElement);
});

navFragment.appendChild(nav);
nav.appendChild(container);
container.appendChild(logo);
container.appendChild(listNav);

// create the section below the navbar, and add classes and contents
const section1Fragment = document.createDocumentFragment();

const section1 = document.createElement('section');
section1.classList.add('section1');

const containersection1 = document.createElement('div');
containersection1.classList.add('container');

const section1left = document.createElement('div');
section1left.classList.add('section1left');

const h1section1left = document.createElement('h1');
h1section1left.textContent = 'This website is awoseme';

const psection1left = document.createElement('p');
psection1left.textContent =
  "this website has some subtext that goes here under the main title. It's a smaller font and color is lower contrast.";

const buttonsection1left = document.createElement('button');
buttonsection1left.textContent = 'Sign Up';

const section1right = document.createElement('div');
section1right.classList.add('section1right');
section1right.textContent = 'This is a placeholder for an image';

const imgsection1right = document.createElement('img');

section1Fragment.appendChild(section1);
section1.appendChild(containersection1);
containersection1.appendChild(section1left);
section1left.appendChild(h1section1left);
section1left.appendChild(psection1left);
section1left.appendChild(buttonsection1left);
containersection1.appendChild(section1right);
section1right.appendChild(imgsection1right);

// create the section2 below the section1, and add classes and contents

const section2Fragment = document.createDocumentFragment();

const section2 = document.createElement('section');
section2.classList.add('section2');

const containersection2 = document.createElement('div');
containersection2.classList.add('container');

const section2header = document.createElement('h2');
section2header.classList.add('section2header');
section2header.innerText = 'Some random information.';

const section2BoxesDiv = document.createElement('div');
section2BoxesDiv.classList.add('section2BoxesDiv');

const boxes = [
  'this is some subtext under an illustration or image',
  'this is some subtext under an illustration or image',
  'this is some subtext under an illustration or image',
  'this is some subtext under an illustration or image',
];

boxes.forEach((e) => {
  const divForEachBox = document.createElement('div');
  divForEachBox.classList.add('boxesDiv');

  const box = document.createElement('div');
  box.classList.add('box');

  const boxP = document.createElement('p');
  boxP.innerText = e;

  divForEachBox.append(box, boxP);
  section2BoxesDiv.appendChild(divForEachBox);
});

section2Fragment.appendChild(section2);
section2.appendChild(containersection2);
containersection2.appendChild(section2header);
containersection2.appendChild(section2BoxesDiv);

const section3Fragment = document.createDocumentFragment();

const section3 = document.createElement('section');
section3.classList.add('section3');

const containerSection3 = document.createElement('div');
containerSection3.classList.add('container');

const section3P = document.createElement('p');
section3P.classList.add('section3p');
section3P.innerText =
  "This is an inspiring quote, or a testimonial from a customer. Maybe it's just fillinng up space, or maybe people will actually read it. Who knows? All I know is that it looks nice";

const section3pSpan = document.createElement('span');
section3pSpan.classList.add('section3pSpan');
section3pSpan.innerText = '-Thor, God of Thunder';

section3Fragment.appendChild(section3);
section3.appendChild(containerSection3);
containerSection3.append(section3P, section3pSpan);

const section4Fragment = document.createDocumentFragment();

const section4 = document.createElement('section4');
section4.classList.add('section4');

const section4Container = document.createElement('div');
section4Container.classList.add('container');

const section4Div = document.createElement('div');
section4Div.classList.add('section4Div');

const section4DivLeft = document.createElement('div');
section4DivLeft.classList.add('section4DivLeft');

const section4DivRight = document.createElement('div');
section4DivRight.classList.add('section4DivRight');

const section4H1 = document.createElement('h1');
section4H1.classList.add('section4H1');
section4H1.textContent = "Call to action! It's time";

const section4P = document.createElement('p');
section4P.classList.add('section4p');
section4P.innerText =
  'Sign up for our product by clicking that button right over there!';

const section4RightButton = document.createElement('button');
section4RightButton.textContent = 'Sign Up';

section4Fragment.appendChild(section4);
section4.appendChild(section4Container);
section4Container.appendChild(section4Div);
section4Div.append(section4DivLeft, section4DivRight);
section4DivLeft.append(section4H1, section4P);
section4DivRight.appendChild(section4RightButton);

const footerFragment = document.createDocumentFragment();

const footer = document.createElement('footer');
footer.classList.add('footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('container');

const footerP = document.createElement('p');
footerP.classList.add('footerp');
footerP.textContent = 'Copyright © The Odin Project';

footerFragment.appendChild(footer);
footer.appendChild(footerContainer);
footerContainer.appendChild(footerP);

document.body.append(
  navFragment,
  section1Fragment,
  section2Fragment,
  section3Fragment,
  section4Fragment,
  footer
);
