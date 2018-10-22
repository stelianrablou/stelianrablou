document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.22.3";

//---------------------------
function t_ec2()
{
  this.citire = function()
  {
  this.a = document.getElementById("id_a").value;
  this.b = document.getElementById("id_b").value;
  this.c = document.getElementById("id_c").value; 
}
//----------------------------
this.rezolvare = function()
{
  var delta = this.b * this.b - 4 * this.a * this.c;
 
  if (delta >=0){
      x1_re = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      x2_re = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      x1_im = x2_im = 0;
  }
  else(
      x1_re = -this.b / (2 * this.a);
      x1_im = Math.sqrt(-delta) / (2 * this.a);
      x2_re = -this.b / (2 * this.a);
      x1_im = -Math.sqrt(-delta) / (2 * this.a);
       }
     this.x1 ={real: x1_re,im:x1_im};
     this.x2 ={real: x2_re,im:x2_im};
 }
 
}
//----------------------------
this.afisare() = function()
{
  document.getElementById("id_x1").innerHTML = this.x1_re + " + " + this.x1_im + "i";
  document.getElementById("id_x1").innerHTML = this.x2_re + " + " + this.x2_im + "i";
  
}
//----------------------------
function rezolva()
{
  var coeficienti = citire();
  var solutii = rezolvare(coeficienti);
  afisare(solutii);
}
//----------------------------
