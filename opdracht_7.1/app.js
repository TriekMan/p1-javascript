let budget = 100;
let par = document.getElementById("para");
let product = prompt("Hoeveel kost het product dat je wilt kopen?")

if(budget >= product){
    par.innerText = "U heeft genoeg geld!";
    par.style.color = "green";
} else {
    par.innerText = "Helaas, te weinig geld."
    par.style.color = "red";
}