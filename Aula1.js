
function calcular(event){ // chama essa função 
    event.preventDefault(); // salva o valor colocado no botão (é preciso declarar esse event no HTML)

let alcoolInput = document.getElementById("alcool").value; // busca um documento através do ID.
let gasolinaInput = document.getElementById("gasolina").value; // busca um documento através do ID.
let contentResult = document.getElementById("content-result")
let textResult = document.getElementById("text-result")

let gasolinaSpan= document.getElementById("gasolina-result");
let alcoolSpan= document.getElementById("alcool-result");

/*
calculo: alcool / gasolina 
e se o resultado for menor que 0.7 compensa usar alcool
*/
    let calculo = (alcoolInput / gasolinaInput); // serve para fazer o calculo 

    //alert(calculo); // mostra o alerta/resultado do calculo 

    if(calculo <0.7){

        //aqui compensa usar alcool
        textResult.innerHTML = "Compensa usar Álcool";
    }else{
        // compensa usar gasolina
        textResult.innerHTML = "Compensa usar Gasolina"; // mostra o texto desejado através de uma chamada/link
    }

gasolinaSpan.innerHTML = "gasolina R$" + gasolinaInput; //mostra o texto desejado através de uma chamada/link (exemplo botao de valor da gasolina)
alcoolSpan.innerHTML = "alcool R$" + alcoolInput;


contentResult.classList.remove("hide"); //usado para remover alguma classe, sem precisar ir até o html.

}