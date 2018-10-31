/**
* Jogo da Velha - Vanilla JS
* File: script.js
* Author: Caio Piassali
* Github: https://github.com/caiopiassali
* Date: 31/10/2018
*/

jogadasDoComputador = 0;
vitorias = 0;
derrotas = 0;
empates = 0;

function reiniciarJogo() {
    document.removeEventListener('click', limparTabuleiro, true);
    document.removeEventListener('click', desabilitarMouse, true);
    document.getElementById('vencedor').innerHTML = "<br/>";
}

function verificar(id) {
    document.addEventListener("click", desabilitarMouse, true);

    desenharX(id);
}

function empate() {
    var count = 0;

    for (i = 0; i < 9; i++) {
        if (document.getElementById('c' + i).value !== "")
            ++count;
    }

    return count === 9;
}

function desenharX(id) {
    if (document.getElementById(id).value === "") {
        document.getElementById(id).innerHTML = '<img src="images/X.png"/>';
        document.getElementById(id).value = "X";
        document.getElementById(id).disabled = true;
    }

    if (houveGanhador("X")) {
        desabilitarTabuleiro();
        vencedor("X");
    } else if (empate()) {
        desabilitarTabuleiro();
        empatou();
    } else {
        setTimeout(desenharO, 500);
    }
}

function desenharO() {
    if (jogadasDoComputador === 0) {
        if (document.getElementById('c4').value === "") {
            document.getElementById('c4').innerHTML = '<img src="images/O.png"/>';
            document.getElementById('c4').value = "O";
            document.getElementById('c4').disabled = true;
            jogadasDoComputador++;
        } else {
            if (fazerJogada("O", 0))
            ;
            else
                fazerJogada("X", 1);
        }
    } else {
        if (fazerJogada("O", 0))
        ;
        else
            fazerJogada("X", 1);
    }

    if (houveGanhador("O")) {
        desabilitarTabuleiro();
        vencedor("O");
    } else if (empate()) {
        desabilitarTabuleiro();
        empatou();
    }

    document.removeEventListener("click", desabilitarMouse, true);
}

function fazerJogada(valor, flag) {
    if (document.getElementById('c0').value === valor && document.getElementById('c1').value === valor && document.getElementById('c2').disabled === false) {
        document.getElementById('c2').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c2').value = "O";
        document.getElementById('c2').disabled = true;
        return true;
    } else if (document.getElementById('c0').value === valor && document.getElementById('c2').value === valor && document.getElementById('c1').disabled === false) {
        document.getElementById('c1').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c1').value = "O";
        document.getElementById('c1').disabled = true;
        return true;
    } else if (document.getElementById('c1').value === valor && document.getElementById('c2').value === valor && document.getElementById('c0').disabled === false) {
        document.getElementById('c0').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c0').value = "O";
        document.getElementById('c0').disabled = true;
        return true;
    } else if (document.getElementById('c3').value === valor && document.getElementById('c4').value === valor && document.getElementById('c5').disabled === false) {
        document.getElementById('c5').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c5').value = "O";
        document.getElementById('c5').disabled = true;
        return true;
    } else if (document.getElementById('c3').value === valor && document.getElementById('c5').value === valor && document.getElementById('c4').disabled === false) {
        document.getElementById('c4').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c4').value = "O";
        document.getElementById('c4').disabled = true;
        return true;
    } else if (document.getElementById('c4').value === valor && document.getElementById('c5').value === valor && document.getElementById('c3').disabled === false) {
        document.getElementById('c3').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c3').value = "O";
        document.getElementById('c3').disabled = true;
        return true;
    } else if (document.getElementById('c6').value === valor && document.getElementById('c7').value === valor && document.getElementById('c8').disabled === false) {
        document.getElementById('c8').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c8').value = "O";
        document.getElementById('c8').disabled = true;
        return true;
    } else if (document.getElementById('c6').value === valor && document.getElementById('c8').value === valor && document.getElementById('c7').disabled === false) {
        document.getElementById('c7').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c7').value = "O";
        document.getElementById('c7').disabled = true;
        return true;
    } else if (document.getElementById('c7').value === valor && document.getElementById('c8').value === valor && document.getElementById('c6').disabled === false) {
        document.getElementById('c6').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c6').value = "O";
        document.getElementById('c6').disabled = true;
        return true;
    } else if (document.getElementById('c0').value === valor && document.getElementById('c3').value === valor && document.getElementById('c6').disabled === false) {
        document.getElementById('c6').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c6').value = "O";
        document.getElementById('c6').disabled = true;
        return true;
    } else if (document.getElementById('c0').value === valor && document.getElementById('c6').value === valor && document.getElementById('c3').disabled === false) {
        document.getElementById('c3').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c3').value = "O";
        document.getElementById('c3').disabled = true;
        return true;
    } else if (document.getElementById('c3').value === valor && document.getElementById('c6').value === valor && document.getElementById('c0').disabled === false) {
        document.getElementById('c0').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c0').value = "O";
        document.getElementById('c0').disabled = true;
        return true;
    } else if (document.getElementById('c1').value === valor && document.getElementById('c4').value === valor && document.getElementById('c7').disabled === false) {
        document.getElementById('c7').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c7').value = "O";
        document.getElementById('c7').disabled = true;
        return true;
    } else if (document.getElementById('c1').value === valor && document.getElementById('c7').value === valor && document.getElementById('c4').disabled === false) {
        document.getElementById('c4').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c4').value = "O";
        document.getElementById('c4').disabled = true;
        return true;
    } else if (document.getElementById('c4').value === valor && document.getElementById('c7').value === valor && document.getElementById('c1').disabled === false) {
        document.getElementById('c1').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c1').value = "O";
        document.getElementById('c1').disabled = true;
        return true;
    } else if (document.getElementById('c2').value === valor && document.getElementById('c5').value === valor && document.getElementById('c8').disabled === false) {
        document.getElementById('c8').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c8').value = "O";
        document.getElementById('c8').disabled = true;
        return true;
    } else if (document.getElementById('c2').value === valor && document.getElementById('c8').value === valor && document.getElementById('c5').disabled === false) {
        document.getElementById('c5').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c5').value = "O";
        document.getElementById('c5').disabled = true;
        return true;
    } else if (document.getElementById('c5').value === valor && document.getElementById('c8').value === valor && document.getElementById('c2').disabled === false) {
        document.getElementById('c2').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c2').value = "O";
        document.getElementById('c2').disabled = true;
        return true;
    } else if (document.getElementById('c0').value === valor && document.getElementById('c4').value === valor && document.getElementById('c8').disabled === false) {
        document.getElementById('c8').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c8').value = "O";
        document.getElementById('c8').disabled = true;
        return true;
    } else if (document.getElementById('c0').value === valor && document.getElementById('c8').value === valor && document.getElementById('c4').disabled === false) {
        document.getElementById('c4').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c4').value = "O";
        document.getElementById('c4').disabled = true;
        return true;
    } else if (document.getElementById('c4').value === valor && document.getElementById('c8').value === valor && document.getElementById('c0').disabled === false) {
        document.getElementById('c0').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c0').value = "O";
        document.getElementById('c0').disabled = true;
        return true;
    } else if (document.getElementById('c2').value === valor && document.getElementById('c4').value === valor && document.getElementById('c6').disabled === false) {
        document.getElementById('c6').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c6').value = "O";
        document.getElementById('c6').disabled = true;
        return true;
    } else if (document.getElementById('c2').value === valor && document.getElementById('c6').value === valor && document.getElementById('c4').disabled === false) {
        document.getElementById('c4').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c4').value = "O";
        document.getElementById('c4').disabled = true;
        return true;
    } else if (document.getElementById('c4').value === valor && document.getElementById('c6').value === valor && document.getElementById('c2').disabled === false) {
        document.getElementById('c2').innerHTML = '<img src="images/O.png"/>';
        document.getElementById('c2').value = "O";
        document.getElementById('c2').disabled = true;
        return true;
    } else {
        if (flag === 1) {
            if (document.getElementById('c4').value === valor && document.getElementById('c2').disabled === false) {
                document.getElementById('c2').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c2').value = "O";
                document.getElementById('c2').disabled = true;
                return true;
            } else if (document.getElementById('c0').value === valor && document.getElementById('c8').value === valor && document.getElementById('c5').disabled === false) {
                document.getElementById('c5').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c5').value = "O";
                document.getElementById('c5').disabled = true;
                return true;
            } else if (document.getElementById('c2').value === valor && document.getElementById('c6').value === valor && document.getElementById('c3').disabled === false) {
                document.getElementById('c3').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c3').value = "O";
                document.getElementById('c3').disabled = true;
                return true;
            } else if (document.getElementById('c4').value === valor && document.getElementById('c6').value === valor && document.getElementById('c8').disabled === false) {
                document.getElementById('c8').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c8').value = "O";
                document.getElementById('c8').disabled = true;
                return true;
            } else if (document.getElementById('c3').value === valor && document.getElementById('c1').value === valor && document.getElementById('c0').disabled === false) {
                document.getElementById('c0').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c0').value = "O";
                document.getElementById('c0').disabled = true;
                return true;
            } else if (document.getElementById('c5').value === valor && document.getElementById('c7').value === valor && document.getElementById('c8').disabled === false) {
                document.getElementById('c8').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c8').value = "O";
                document.getElementById('c8').disabled = true;
                return true;
            } else if (document.getElementById('c3').value === valor && document.getElementById('c7').value === valor && document.getElementById('c6').disabled === false) {
                document.getElementById('c6').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c6').value = "O";
                document.getElementById('c6').disabled = true;
                return true;
            } else if (document.getElementById('c1').value === valor && document.getElementById('c5').value === valor && document.getElementById('c2').disabled === false) {
                document.getElementById('c2').innerHTML = '<img src="images/O.png"/>';
                document.getElementById('c2').value = "O";
                document.getElementById('c2').disabled = true;
                return true;
            } else {
                var random;

                while (true) {
                    random = Math.floor(Math.random() * 9);

                    if (document.getElementById('c' + random).value === "") {
                        document.getElementById('c' + random).innerHTML = '<img src="images/O.png"/>';
                        document.getElementById('c' + random).value = "O";
                        document.getElementById('c' + random).disabled = true;
                        break;
                    } else
                        continue;
                }
            }
        } else {
            return false;
        }
    }
}

function houveGanhador(valor) {
    if (document.getElementById('c0').value === valor && document.getElementById('c1').value === valor && document.getElementById('c2').value === valor)
        return true;
    else if (document.getElementById('c3').value === valor && document.getElementById('c4').value === valor && document.getElementById('c5').value === valor)
        return true;
    else if (document.getElementById('c6').value === valor && document.getElementById('c7').value === valor && document.getElementById('c8').value === valor)
        return true;
    else if (document.getElementById('c0').value === valor && document.getElementById('c3').value === valor && document.getElementById('c6').value === valor)
        return true;
    else if (document.getElementById('c1').value === valor && document.getElementById('c4').value === valor && document.getElementById('c7').value === valor)
        return true;
    else if (document.getElementById('c2').value === valor && document.getElementById('c5').value === valor && document.getElementById('c8').value === valor)
        return true;
    else if (document.getElementById('c0').value === valor && document.getElementById('c4').value === valor && document.getElementById('c8').value === valor)
        return true;
    else if (document.getElementById('c2').value === valor && document.getElementById('c4').value === valor && document.getElementById('c6').value === valor)
        return true;
    else
        return false;
}

function desabilitarTabuleiro() {
    for (i = 0; i < 9; i++) {
        document.getElementById('c' + i).disabled = true;
    }

    document.addEventListener('click', limparTabuleiro, true);
}

function desabilitarMouse(event) {
    event.stopPropagation();
    event.preventDefault();
}

function limparTabuleiro() {
    for (i = 0; i < 9; i++) {
        document.getElementById('c' + i).innerHTML = '<img src="images/V.png"/>';
        document.getElementById('c' + i).value = "";
        document.getElementById('c' + i).disabled = false;
    }

    reiniciarJogo();
}

function vencedor(vencedor) {
    if (vencedor === "X") {
        document.getElementById("vencedor").innerHTML = "Você Venceu!";
        vitorias++;
        document.getElementById("info-bottom").innerHTML = '<span class="i-l">' + vitorias + '</span>  <span class="i-c">' + derrotas + '</span>  <span class="i-r">' + empates + '</span>';
    } else {
        document.getElementById("vencedor").innerHTML = "Você Perdeu!";
        derrotas++;
        document.getElementById("info-bottom").innerHTML = '<span class="i-l">' + vitorias + '</span>  <span class="i-c">' + derrotas + '</span>  <span class="i-r">' + empates + '</span>';
    }

    jogadasDoComputador = 0;
}

function empatou() {
    document.getElementById("vencedor").innerHTML = "Empate";
    empates++;
    document.getElementById("info-bottom").innerHTML = '<span class="i-l">' + vitorias + '</span>  <span class="i-c">' + derrotas + '</span>  <span class="i-r">' + empates + '</span>';

    jogadasDoComputador = 0;
}