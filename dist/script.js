var numeroSecreto = parseInt(Math.random() * (1000 - 1) + 1);
var numeroDeChutes = 1
var maxDeTentativas = 12

while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 1 e 1000");
  if (chute == numeroSecreto) {
    alert("Uhhuuu! Você acertou" + " na " + numeroDeChutes + "° tentativa!!!");
  } else if ( numeroDeChutes == maxDeTentativas) {
    alert("Ahhh..que pena, você ja perdeu todas as suas vidas")
    break
  } else if (chute > numeroSecreto) {
    alert("Que pena..o número é MENOR do que " + chute + ". Você está na " + numeroDeChutes + " ° tentativa! Não dessista ainda!!!")
  } else if (chute < numeroSecreto) {
    alert("Que pena..o número é MAIOR do que " + chute + ". Você está na " + numeroDeChutes + "° tentativa! Não dessista ainda!!!")
  }
  numeroDeChutes++
}