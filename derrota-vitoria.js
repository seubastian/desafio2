  function vitoria() {
    pincel.beginPath()
    pincel.fillStyle = '#050505';
    pincel.font = " 25px 'Lato'";
    pincel.fillText('Parabéns, você acertou!!', 665, 180);
    pincel.fillText('Para continuar jogando clique em "JOGAR."', 665, 210);
   }

function derrota() {
  escrevePalavraSecreta();
    pincel.beginPath()
    pincel.fillStyle = '#050505';
    pincel.font = " 25px 'Lato'";
    pincel.fillText('Você não acertou! A palavra secreta era:', 665, 180);
    pincel.fillText('Para continuar jogando clique em "JOGAR"', 665, 210);
    }

function escrevePalavraSecreta() {
    pincel.beginPath()
    pincel.font = " 25px 'Lato'";
    pincel.fillStyle = '#0000ff';
    pincel.fillText(palavraSecreta, 1077,180);
   }

