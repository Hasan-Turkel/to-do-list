// ************selectors************

const tBody = document.getElementsByTagName("tbody");
const date = document.getElementsByTagName("span");

// **********variables**********
let year = new Date().getFullYear();
let day = new Date().getDate();
let month = new Date().getMonth() + 1;

date[0].innerText = `${day}/${month}/${year}`;

console.log(date[0].innerText);
// *********addEventListeners************

tBody[0].addEventListener("click", (e) => {
  clickFunction(e);
});

// *************functions***********

const clickFunction = (e) => {
  if (e.target.innerText == "-" && e.target.classList.contains("btn")) {
    e.target.innerText = "+";
    e.target.style.backgroundColor = "green";
    e.target.parentElement.nextElementSibling.style.color = "green";
  } else if (e.target.innerText == "+" && e.target.classList.contains("btn")) {
    e.target.innerText = "-";
    e.target.style.backgroundColor = "";
    e.target.parentElement.nextElementSibling.style.color = "";
  }
};
