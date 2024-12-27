/*const numero = 10;
if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
*/

/*const numeroA = 12;
const numeroB = 3;
const numeroC = 1;

if (numeroA > numeroB && numeroA > numeroC) {
  console.log("El número A es mayor que el número B y C");
} else if (numeroB > numeroA && numeroB > numeroC) {
  console.log("El número B es mayor que el número A y C");
} else if (numeroC > numeroA && numeroC > numeroB) {
  console.log("El número C es mayor que el número A y B");
} else {
  console.log("El número A, B y C son iguales");
}
*/

/*const numero = 10;
if (numero <= 5) {
  console.log("tu callificacion es numero", numero, "reprobado");
} else if (numero > 5 && numero <= 7) {
  console.log("tu callificacion es numero", numero, "regular");
} else if (numero > 7 && numero <= 8) {
  console.log("tu callificacion es numero", numero, "bien");
} else if (numero > 8 && numero <= 9) {
  console.log("tu callificacion es numero", numero, "muy bien");
} else if (numero > 9 && numero <= 10) {
  console.log("tu callificacion es numero", numero, "excelente");
}
*/

/* const numero = 50;
if (numero >= 1 && numero <= 100) {
  console.log("Número válido");
} else {
  console.log("Número fuera de rango");
}*/

/*const palin = function (numeri) {
  let iremun = "";
  for (let meh = String(numeri).length - 1; meh >= 0; meh--) {
    iremun += String(numeri)[meh];
  }
  if (String(numeri) === iremun) {
    console.log(numeri, "es un palíndromo");
  } else {
    console.log(numeri, "no es un palíndromo");
  }
};
palin(445);

const fib = function (num) {
  let secuencia = [0, 1];

  if (num <= 1) {
    let resultado = [];
    for (let meh = 0; meh <= num; meh++) {
      resultado.push(secuencia[meh]);
    }
    return resultado;
  }

  for (let watever = 2; watever <= num; watever++) {
    secuencia[watever] = secuencia[watever - 1] + secuencia[watever - 2];
  }

  return secuencia;
};

let peticion = 10;
console.log("Esta es tu secuencia hasta la posición", peticion, ":");
console.log(fib(peticion));
*/
/*anagrama*/
const Anagrama = function (palabra1, palabra2) {
  if (palabra1.length !== palabra2.length) {
    return false;
  }
  if (
    palabra1.split("").sort().join("") === palabra2.split("").sort().join("")
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(Anagrama("paz", "amor"));
