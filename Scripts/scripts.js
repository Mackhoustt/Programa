const cajaCantidad= document.getElementById("idCant");
const cajaValor= document.getElementById("1");
const cajaDescuento= document.getElementById("2");
const total= document.getElementById("3");
const mensaje= document.getElementById("4");


function calcular(){
  var valorPc, descuento,valorTotal;
 let cantidad= cajaCantidad.value;
  valorPc= cantidad * 820000;
  if (valorPc < 1640000 || valorPc > 9840000){
    cajaValor.value= valorPc;
    cajaDescuento.value=0;
    total.value=valorPc;
   mensaje.value = "0";
  }

  else if(valorPc>=1640000 && valorPc<=3280000){
      descuento= (valorPc/100)*15;
      valorTotal= valorPc-descuento;
      cajaValor.value= valorPc;
      cajaDescuento.value=descuento;
      total.value=valorTotal;
     mensaje.value = "15%";
  }
   else if(valorPc > 3280000 && valorPc <=6560000){
    descuento= (valorPc/100)*25;
    valorTotal= valorPc-descuento;
    cajaValor.value= valorPc;
    cajaDescuento.value=descuento;
    total.value=valorTotal;
    mensaje.value = "25%";
  }
  else if (valorPc>6560000 && valorPc<=9840000){
    descuento= (valorPc/100)*35;
    valorTotal= valorPc-descuento;
      cajaValor.value= valorPc;
      cajaDescuento.value=descuento;
      total.value=valorTotal;
      mensaje.value = "35%";
  }  }