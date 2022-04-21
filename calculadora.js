const interface = require('readline-sync');
let response = "";
do{
  console.log("1.- Suma");
  console.log("2.- Resta");
  console.log("3.- Multiplicación");
  console.log("4.- Divisón");
  console.log("5.- Salir");

  response = interface.question("Qué operación deseas realizar, escribe el número: ");
  if(response != "5"){
    let firstNumber = interface.question("Dame el primer número: ");
    let secondNumber = interface.question("Dame el segundo número: ");
    switch (response) {
      case "1":
        var result = parseInt(firstNumber) + parseInt(secondNumber);
        console.log("El resultado es: "+result);
        break;
      case "2":
        var result = parseInt(firstNumber) - parseInt(secondNumber);
        console.log("El resultado es: " + result);
        break;
      case "3":
        var result = parseInt(firstNumber) * parseInt(secondNumber);
        console.log("El resultado es: " + result);
        break;
      case "4":
        var result = parseInt(firstNumber) / parseInt(secondNumber);
        console.log("\n\n El resultado es: " + result + "\n\n");
        break;
    }    
  }
}while(response != "5")

