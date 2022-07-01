/* •Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres */

let numero1: number = Number(prompt("Ingrese el 1er número: "))
let numero2: number = Number(prompt("Ingrese el 2do número: "))
let numero3: number = Number(prompt("Ingrese el 3er número: "))

if (numero2 && numero3 < numero1) {
  console.log ("El 1er numero es el mayor y es: ", numero1)
} else {
  if (numero1 && numero3 < numero2) {
    console.log ("El 2do numero es el mayor y es: ", numero2)
  } else {
    if (numero1 && numero2 < numero3) {
      console.log ("el 3er numero es el mayor y es: ", numero3)
    }
  }
}

