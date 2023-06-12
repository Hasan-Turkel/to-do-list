// ************selectors************

const tBody = document.getElementsByTagName("tbody");
const date = document.getElementsByTagName("span");
const start = document.getElementById("start")

// **********variables**********
let year = new Date().getFullYear();
let day = new Date().getDate();
let month = new Date().getMonth() + 1;

date[0].innerText = `${day}/${month}/${year}`;


let ids = []



// *********addEventListeners************

tBody[0].addEventListener("click", (e) => {
  clickFunction(e);
});
window.addEventListener("load", () => {
  ids = localStorage.ids.split(",") || [];

  if (ids = localStorage.ids.split(",")){ for (let i=0; i<ids.length; i++){
    let a = document.getElementById(ids[i])
    a.innerText = "+"
    a.style.backgroundColor = "green";
    a.parentElement.nextElementSibling.style.color = "green";
    console.log(ids[i]);
  }}
})
start.addEventListener("click", () => {
  localStorage.clear();
  ids=[];
  location.reload()
})


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
  ids.push(e.target.id)
  localStorage.setItem("ids", ids)
};
const undone = (e) => {
  e.target.innerText = "-";
  e.target.style.backgroundColor = "";
  e.target.parentElement.nextElementSibling.style.color = "";
  ids = ids.filter((id)=> id !=e.target.id);
  localStorage.setItem("ids", ids)
}

