
let nm = prompt("digite seu nome:")
let nm2 = nm.split(" ")
let iniciais = nm2.reduce((a,n)=>a = a+n.slice(0,1),'')
document.write(iniciais)