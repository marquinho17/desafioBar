function bar(){
     const valor = parseFloat(document.getElementById("valor_1").value);
     const valor2 = parseFloat(document.getElementById("valor_2").value);
     var quant1 = parseInt(document.getElementById("happy").value);
     var quant2 = parseInt(document.getElementById("semhappy").value);

     var valTotal1 = valor * quant1;
     var valTotal2 = valor2 * quant2;
     var valComAcre = valTotal2 * 1.10;
     var valFinal = valTotal1 + valComAcre;

     /* const resultadoHTML = `<p>Total durante a happy hour R$ ${valTotal1.toFixed(2)}<P>
     <p>Total sem o desconto happy hour R$ ${valComAcre.toFixed(2)}</P>
     <p>Valor final com todas as bebidas R$ ${valFinal.toFixed(2)}</p>`; */

     /* document.getElementById("resultado").innerHTML = resultadoHTML; */

     alert(`Valor durante a happy hour ${valTotal1} | Valor sem o desconto da happy hour ${valComAcre} | Valor final ${valFinal}`);

}