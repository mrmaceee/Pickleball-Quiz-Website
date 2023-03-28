// create header element
const header = document.createElement("header");

// create nav element with class "navbar"
const nav = document.createElement("nav");
nav.className = "navbar";

// create logo container div
const logoContainer = document.createElement("div");
logoContainer.className = "logo-container";

// create image element with src "x40.png" and alt "Pickleball Quiz logo"
const img = document.createElement("img");
img.src = "x40.png";
img.alt = "Pickleball Quiz logo";

const h1 = document.createElement("h1");
const a = document.createElement("a");
a.textContent = "pickleballquiz.com";
a.href = "index.html";
h1.appendChild(a);

// append image and h1 elements to logo container
logoContainer.appendChild(img);
logoContainer.appendChild(h1);

// create unordered list element
const ul = document.createElement("ul");

// create first list item with link to "paddlequiz11.html"
const li1 = document.createElement("li");
const a1 = document.createElement("a");
a1.href = "paddlequiz11.html";
a1.textContent = "Paddle Quiz";
li1.appendChild(a1);

// create second list item with link to "shoe-quiz.html"
const li2 = document.createElement("li");
const a2 = document.createElement("a");
a2.href = "shoe-quiz.html";
a2.textContent = "Shoe Quiz";
li2.appendChild(a2);

// append list items to unordered list
ul.appendChild(li1);
ul.appendChild(li2);

// append logo container and unordered list to nav element
nav.appendChild(logoContainer);
nav.appendChild(ul);

// append nav element to header element
header.appendChild(nav);

// get the first child element of the body
const firstChild = document.body.firstChild;

// insert header element before the first child of the body
document.body.insertBefore(header, firstChild);