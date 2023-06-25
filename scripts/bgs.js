var baner = new Array("img/background.jpg","img/bg.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg","img/bg5.jpg","img/bg6.jpg");
var licznik = 0;
 
function rotate() {
licznik++;
if(licznik == baner.length){
licznik = 0;
}
document.getElementById('tlo').src = baner[licznik];
setTimeout("rotate()", 5 * 1000);
}