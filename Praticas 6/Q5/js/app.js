let nm = prompt("digite o nome completo:");
let nm2 = n.split(" ");
let inicial = nm2.reduce((a,n)=>a+=n.slice(0,1),"");
document.write(inicial);