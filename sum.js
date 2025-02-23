function getRandomNumber() {
  return Math.floor(Math.random() * 100); 
}

function sumRandom() {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const resultado = a + b;
  
  console.log(`Os números gerados foram: ${a} e ${b}`);
  console.log(`Resultado da soma: ${resultado}`);
  
  return resultado;
}

module.exports = { sumRandom, getRandomNumber };
