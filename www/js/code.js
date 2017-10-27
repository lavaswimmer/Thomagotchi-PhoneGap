function geefNaam() {
  naam = prompt("Enter your pets name", "Thom");

  if (naam !== null) {
    document.getElementById("naam").innerHTML = naam;
    document.title = naam+"agotchi";
  }
}
