const jogador1 = "X";
const jogador2 = "O";
var playTime = jogador1; 
var gameOver = false;
var resultado;
var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
var somapontosX = 0;
var somapontosO = 0;

atualizaIndicador();
setarEspacos();

function atualizaIndicador() {
    if (gameOver) {
        return;
    }

    if (playTime == jogador1) {
        var jogador = document.querySelectorAll ("#indicador img")[0];
        jogador.setAttribute("src", "imagens/X.png");
    } else {
        var jogador = document.querySelectorAll ("#indicador img")[0];
        jogador.setAttribute("src", "imagens/O.png");    
    }
} 

function setarEspacos(){
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function(){
                if (gameOver) {
                    return;
                }

                if (this.getElementsByTagName("img").length == 0) {
                    if (playTime == jogador1) {
                        this.innerHTML = "<img src='imagens/x.png' width='50px' height='50px'>";
                        this.setAttribute("jogada", jogador1);
                        playTime = jogador2;
                    } else {
                        this.innerHTML = "<img src='imagens/o.png' width='50px' height='50px'> ";
                        this.setAttribute("jogada", jogador2);
                        playTime = jogador1;
                    }
                    atualizaIndicador();
                    verificaVencedor();
                }
        }
        );
    }
}

async function verificaVencedor(){
    a1 = document.getElementById("a1").getAttribute("jogada");
    a2 = document.getElementById("a2").getAttribute("jogada");
    a3 = document.getElementById("a3").getAttribute("jogada");

    b1 = document.getElementById("b1").getAttribute("jogada");
    b2 = document.getElementById("b2").getAttribute("jogada");
    b3 = document.getElementById("b3").getAttribute("jogada");

    c1 = document.getElementById("c1").getAttribute("jogada");
    c2 = document.getElementById("c2").getAttribute("jogada");
    c3 = document.getElementById("c3").getAttribute("jogada");

    var vencedor = "";

    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 !== "")){
        vencedor = "a1";
    } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
        vencedor = "b2";   
    } else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")){
        vencedor = "c3"
    } else if (a1 != "" && a2 != "" && a3!= "" && b1 != "" && b2 != "" && b3!= "" && c1 != "" && c2 != "" && c3!= "") {
        await sleep(50); 
        alert("Deu Velha, nenhum fez pontos!");

        document.getElementById("a1").setAttribute("jogada", "");
        document.getElementById("a2").setAttribute("jogada", "");
        document.getElementById("a3").setAttribute("jogada", "");

        document.getElementById("b1").setAttribute("jogada", "");
        document.getElementById("b2").setAttribute("jogada", "");
        document.getElementById("b3").setAttribute("jogada", "");

        document.getElementById("c1").setAttribute("jogada", "");
        document.getElementById("c2").setAttribute("jogada", "");
        document.getElementById("c3").setAttribute("jogada", "");
    

        document.getElementById("a1").innerHTML = "";
        document.getElementById("a2").innerHTML = "";
        document.getElementById("a3").innerHTML = "";
        
        document.getElementById("b1").innerHTML = "";
        document.getElementById("b2").innerHTML = "";
        document.getElementById("b3").innerHTML = "";

        document.getElementById("c1").innerHTML = "";
        document.getElementById("c2").innerHTML = "";
        document.getElementById("c3").innerHTML = "";
    }

    if (vencedor != ""){
        gameOver = true;

        if (playTime == jogador1){
            vencedor = "O"
        }
        if (playTime == jogador2){
            vencedor = "X"
        }

        await sleep(50); 

        resultado = confirm("O ganhador foi o: '" + vencedor + "'");
        if (resultado == true) {

            document.getElementById("a1").setAttribute("jogada", "");
            document.getElementById("a2").setAttribute("jogada", "");
            document.getElementById("a3").setAttribute("jogada", "");

            document.getElementById("b1").setAttribute("jogada", "");
            document.getElementById("b2").setAttribute("jogada", "");
            document.getElementById("b3").setAttribute("jogada", "");

            document.getElementById("c1").setAttribute("jogada", "");
            document.getElementById("c2").setAttribute("jogada", "");
            document.getElementById("c3").setAttribute("jogada", "");
        

            document.getElementById("a1").innerHTML = "";
            document.getElementById("a2").innerHTML = "";
            document.getElementById("a3").innerHTML = "";
            
            document.getElementById("b1").innerHTML = "";
            document.getElementById("b2").innerHTML = "";
            document.getElementById("b3").innerHTML = "";

            document.getElementById("c1").innerHTML = "";
            document.getElementById("c2").innerHTML = "";
            document.getElementById("c3").innerHTML = "";

            if (vencedor == "X") {
                playTime = jogador1;
                somapontosX += 1;
                document.getElementById("pontosX").innerHTML = somapontosX;  
            }
            if (vencedor == "O") {
                playTime = jogador2;
                somapontosO += 1;
                document.getElementById("pontosO").innerHTML = somapontosO;
            }

            gameOver = false;

            vencedor = "";

        } else if (resultado == false) {
            document.getElementById("pontosO").innerHTML = 0;    
            document.getElementById("pontosX").innerHTML = 0;
        }
    }
}

function sleep(ms) {
    return new Promise (resolve => setTimeout(resolve, ms));
}