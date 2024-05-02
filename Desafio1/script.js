 const myNumberOne = prompt ('Digite o primeiro número!')
 const myNumberTwo = prompt ('Digite o segundo número!') 



 let sum = Number(myNumberOne) + Number(myNumberTwo)
 let subtraction = Number(myNumberOne) - Number(myNumberTwo)
 let multiplication= Number(myNumberOne) *Number(myNumberTwo)
 let division = Number(myNumberOne) / Number(myNumberTwo)
 let resDivision= Number(myNumberOne) % Number(myNumberTwo)

alert(`A soma dos dois números são: ${sum}`)
alert (`A subtração dos dois números são: ${subtraction}`)
alert (`A multiplicação dos dois número é: ${multiplication}`)
alert (`A divisão dos dois números é: ${division.toFixed(2)}`)
alert (`O resto da divisão dos dois números é : ${resDivision.toFixed(2)}`)

if (sum % 2 === 0) {
   alert (`A soma dos dois números é par: ${sum}`)
}
else {
  
    alert (`A soma dos dois números é impar ${sum}`)
  
  }

  if ( myNumberOne ===myNumberTwo) {
    alert ('Os dois números são iguais!')
  }
  else {
    alert ('Os dois números não são iguais!')
  }
