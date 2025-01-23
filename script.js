const PI = 3.14;
let r = 6.378e6;
let c = 2*PI*r;
let surfArea = 4*PI*r*r;
let vol = (4/3)*(PI*r*r*r);

document.write('The radius of the sphere is' + r + '<br><br>');
document.write('The circumference is' + c + '<br><br>');
document.write('The surface area is' + surfArea + '<br><br>');
document.write('The volume is' + vol + '<br><br>');
