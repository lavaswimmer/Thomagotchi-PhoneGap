// function to change the tamagotchi name
function geefNaam() {
  naam = prompt("Enter your pets name", "Thom");

  if (naam !== null) {
    document.getElementById("naam").innerHTML = naam;
    document.title = naam+"agotchi";
  }
}

// consuming the food/play/sleep

food = 100;
enjoy = 100;
sleep = 100;

setInterval(
  window.onload = function consume() {

    food -=10;
    enjoy -=10;
    sleep -=10;

    document.getElementById("food-p").value = food;
    document.getElementById("enjoyment-p").value = enjoy;
    document.getElementById("sleep-p").value = sleep;
  }
,5000);

function feed() {
  food +=15;
  document.getElementById("food-p").value = food;
}

function enjoying() {
  enjoy +=15;
  document.getElementById("enjoyment-p").value = enjoy;
}

function sleeping() {
  sleep +=15;
  document.getElementById("sleep-p").value = sleep;
}
