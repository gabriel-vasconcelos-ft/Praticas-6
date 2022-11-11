let array1 = [10,11,12,14,15];
let array2 = array1.reduce(function(a,va){
    return a+va;
}) 
document.write(array2);