data=+new Date(2019,07,24,00,00,00); 
(function(){
    var a = new Date();
    var b = a.toLocaleTimeString();
    var c = new Date();
    var d = c.toLocaleDateString();
document.getElementById('date').innerHTML=(d)+' ; '+(b)+'';
setTimeout(arguments.callee,1000)})() 