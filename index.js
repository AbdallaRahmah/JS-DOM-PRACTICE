// colors var
let main = "#006778";

let second = "#DFDFDE";

let third = "#1B1A17";

// set body
document.body.style.margin = "0";

document.body.style.padding = "0";

document.body.style.backgroundColor = second;

// heaedr
let header = document.createElement("header");

header.style.backgroundColor = "#fff";

header.style.margin = "0";

header.style.padding = "0 1rem";

header.style.height = "10vh";

header.style.display = "flex";

header.style.alignItems = "center";

header.style.justifyContent = "space-between";

// header title
let headerTitle = document.createElement("h1");

headerTitle.style.color = main;

let titleContent = document.createTextNode("Elzero");

headerTitle.append(titleContent);

header.append(headerTitle);

document.body.append(header);

// header nav
let headerNav = document.createElement("ul");

headerNav.style.display = "flex";

headerNav.style.listStyleType = "none";

let addItems = (items) => {
  for (let i = 0; i < items.length; i++) {
    let headerItems = document.createElement("li");

    headerItems.style.padding = "1rem";

    headerItems.style.color = third;

    let itemContent = document.createTextNode(items[i]);

    headerItems.append(itemContent);

    headerNav.append(headerItems);
  }

  header.append(headerNav);
};

let navItem = ["Home", "About", "Service", "Contact"];

addItems(navItem);

// main
let mainSec = document.createElement("main");

mainSec.style.margin = ".5rem 0";

mainSec.style.height = "calc(80vh - 1rem)"

mainSec.style.display = "flex";

mainSec.style.justifyContent = "space-around";

mainSec.style.flexWrap = "wrap";

// box
for (let i = 1; i <= 15; i++) {
    let box = document.createElement("div");

    box.style.width = "calc((100% - 6rem) / 3)";
    
    box.style.backgroundColor = "#fff";

    box.style.margin = ".5rem 1rem";

    box.style.display = "grid";

    box.style.placeItems = "center";

    let boxContent = `${i} product`

    box.append(boxContent);

    mainSec.append(box);
}

document.body.append(mainSec);

// footer
let footer = document.createElement("footer");

footer.style.backgroundColor = main;

footer.style.color = "#fff";

footer.style.height = "10vh";

footer.style.display = "flex";

footer.style.alignItems = "center";

footer.style.justifyContent = "center";

let footContent = document.createTextNode(`build by Ben Rahmha`);

footer.append(footContent);

document.body.append(footer);