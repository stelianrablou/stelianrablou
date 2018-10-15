document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.15.2";

//---------------------------
function citire()
{

  var a = document.getElementById("id_a").value;
  var b = document.getElementById("id_b").value;
  var c = document.getElementById("id_c").value;
  var coeficienti = {a;_a, b;_b, c;_c};
  return coeficienti;
}
//----------------------------
function rezolvare(coeficienti)
{
  var delta = coeficienti.b * coeficienti.b - 4 * coeficienti.a * coeficienti.c;
  var x1_re, x1_im, x2_re, x2_im;
  if (delta >=0){
      x1 = (-coeficienti.b + Math.sqrt(delta)) / (2 * coeficienti.a);
      x2 = (-coeficienti.b - Math.sqrt(delta)) / (2 * coeficienti.a);
      x1_im = x2_im = 0;
  }
  else(
      x1_re = -coeficienti.b / (2 * coeficienti.a);
      x1_im = Math.sqrt(-delta) / (2 * coeficienti.a);
      x2_re = -coeficienti.b / (2 * coeficienti.a);
      x1_im = -Math.sqrt(-delta) / (2 * coeficienti.a);
     
     var x1 ={real: x1_real,imaginar:x1_imaginar};
     var x2 ={real: x2_real,imaginar:x2_imaginar};
     var solutii 
     
     return solutii;
  }
  
}
//----------------------------
funbction afisare()
{
  document.getElementById("id_x1").innerHTML = x1_re + " + " + x1_im + "i";
  document.getElementById("id_x1").innerHTML = x2_re + " + " + x2_im + "i";
  
}
//----------------------------
function rezolva()
{
  var coeficienti = citire();
  var solutii = rezolvare(coeficienti);
  afisare(solutii);
}
