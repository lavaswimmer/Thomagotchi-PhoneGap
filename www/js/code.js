var naam = null;
var food = 110;
var enjoy = 110;
var sleep = 110;

// function to change the tamagotchi name
window.onload = geefNaam();

function geefNaam(){

  if (naam == null) {
      naam = prompt("Enter your pets name", "Thom");
      geefNaam();
  }else{
      document.getElementById("naam").innerHTML = naam;
      document.title = naam+"agotchi";
      consume();
  }
}

// consuming the food/play/sleep

function consume(){

    setInterval(function() {
        if (food > 0) {
          food -=10;
          document.getElementById("food-p").value = food;
        }else {
          food -=0;
          document.getElementById("food-p").value = food;
        }

        if (enjoy > 0) {
          enjoy -=10;
          document.getElementById("enjoyment-p").value = enjoy;
        }else {
          enjoy -=0;
          document.getElementById("enjoyment-p").value = enjoy;
        }

        if (sleep > 0) {
          sleep -=10;
          document.getElementById("sleep-p").value = sleep;
        }else {
          sleep -=0;
          document.getElementById("sleep-p").value = sleep;
        }

        console.log("food: "+food);
        console.log("enjoyment: "+enjoy);
        console.log("sleep: "+sleep);
        console.log("");
      }
    ,1000);
}

// functions to add more food/enjoyment/sleep
function feed() {
  if (food < 100) {
    food +=15;
    document.getElementById("food-p").value = food;
  }else {
    food +=0;
  }
}

function enjoying() {
  if (enjoy < 100) {
    enjoy +=15;
    document.getElementById("enjoyment-p").value = enjoy;
  }else {
    enjoy +=0;
  }
}

function sleeping() {
  if (sleep < 100) {
    sleep +=15;
    document.getElementById("sleep-p").value = sleep;
  }else {
    sleep +=0;
  }
}

// Dead

console.log(food);

setInterval(
  function dead() {
    if (food <= 0) {
      alert(naam+" is dead");
      location.reload();
    }else if (enjoy <= 0) {
      alert(naam+" is dead");
      location.reload();
    }else if (sleep <= 0) {
      alert(naam+" is dead");
      location.reload();
    }
  }
,100);
