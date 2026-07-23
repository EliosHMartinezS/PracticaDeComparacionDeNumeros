const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa el primer número: ", (input1) => {
  rl.question("Ingresa el segundo número: ", (input2) => {
    rl.question("Ingresa el tercer número: ", (input3) => {
      let num1 = Number(input1);
      let num2 = Number(input2);
      let num3 = Number(input3);

      // Validar que sean números
      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Por favor ingresa únicamente valores numéricos válidos.");
      } else {
        // Verificar si todos son iguales
        if (num1 === num2 && num2 === num3) {
          console.log(`Los tres números son iguales: ${num1}, ${num2}, ${num3}`);
        } else {
          let numeros = [num1, num2, num3];

          let mayorAMenor = [...numeros].sort((a, b) => b - a);
          let menorAMayor = [...numeros].sort((a, b) => a - b);

          let mayor = mayorAMenor[0];
          let centro = mayorAMenor[1];
          let menor = mayorAMenor[2];

          console.log(`Número Mayor: ${mayor}`);
          console.log(`Número del Centro: ${centro}`);
          console.log(`Número Menor: ${menor}`);
          console.log("-----------------------");
          console.log(`De mayor a menor: ${mayorAMenor.join(", ")}`);
          console.log(`De menor a mayor: ${menorAMayor.join(", ")}`);
        }
      }

      rl.close();
    });
  });
});