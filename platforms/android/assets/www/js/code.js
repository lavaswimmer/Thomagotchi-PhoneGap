// function to change the tamagotchi name
function geefNaam() {
  naam = prompt("Enter your pets name", "Thom");

  if (naam !== null) {
    document.getElementById("naam").innerHTML = naam;
    document.title = naam+"agotchi";
  }
}

// consuming the food/play/sleep

food = 110;
enjoy = 110;
sleep = 110;

setInterval(
  window.onload = function consume() {
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
,5000);

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
