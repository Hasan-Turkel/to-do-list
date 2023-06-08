// ************selectors************

const tBody = document.getElementsByTagName("tbody")

// *********addEventListeners************

tBody[0].addEventListener("click", (e)=>{

    clickFunction(e)})
 
// *************functions***********

const clickFunction = (e)=>{

     
    if (e.target.innerText=="-"){
        e.target.innerText = "+"
        e.target.style.backgroundColor = "green"
        e.target.parentElement.nextElementSibling.style.color = "green"}
        else if (e.target.innerText=="+"){
            e.target.innerText = "-"
            e.target.style.backgroundColor = ""
            e.target.parentElement.nextElementSibling.style.color = ""}
    }
