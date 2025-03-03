let numeroUn = 1;
let stringUn = ;'1';
console.log(numeroUn + stringUn);
// Output: 11
let numeroTreinta = 30;
let stringTreinta = '30';
console.log(numeroTreinta + stringTreinta);
// Output: 3030
let numeroDiez = 10;
let stringDiez = '10';  
console.log(numeroDiez + stringDiez);
// Output: 1010

if (numeroUn == stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}   
// Output: Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes
typeof numeroUn;
// Output: 'number'
typeof stringUn;
// Output: 'string'

if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {    
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}   
// Output: Las variables numeroTreinta y stringTreinta no tienen el mismo tipo
typeof numeroTreinta;
// Output: 'number'
typeof stringTreinta;
// Output: 'string'

if (numeroDiez != stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
}
else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
}
// Output: Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes
typeof numeroDiez;  
// Output: 'number'
typeof stringDiez;
// Output: 'string'




