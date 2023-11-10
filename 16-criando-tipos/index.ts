//Tipo Literal

let literal: "Uma String"
let pi: 3.14

let option: "Yes" | "No" // Yes ou No

let otherOption: number | boolean // Número ou Booleano

// Reutilizando um tipo

type Numero = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
let umNumeroQualquer: Numero 

function checkNumber (outroNumeroQualquer: Numero) {
  if (outroNumeroQualquer === 1) {
    console.log("Número 1")
  }
}

checkNumber(1)
