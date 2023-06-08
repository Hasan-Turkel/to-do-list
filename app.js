// ************selectors************

const tBody = document.getElementsByTagName("tbody");
const date = document.getElementsByTagName("span");

// **********variables**********
let year = new Date().getFullYear();
let day = new Date().getDate();
let month = new Date().getMonth() + 1;

date[0].innerText = `${day}/${month}/${year}`;

// *********addEventListeners************

tBody[0].addEventListener("click", (e) => {
  clickFunction(e);
});

// *************functions***********

const clickFunction = (e) => {
  if (e.target.innerText == "-" && e.target.classList.contains("btn")) {
    done(e);
  } else if (e.target.innerText == "+" && e.target.classList.contains("btn")) {
    undone(e);
  }
};
const done = (e) => {
  e.target.innerText = "+";
  e.target.style.backgroundColor = "green";
  e.target.parentElement.nextElementSibling.style.color = "green";
};
const undone = (e) => {
  e.target.innerText = "-";
  e.target.style.backgroundColor = "";
  e.target.parentElement.nextElementSibling.style.color = "";
};
