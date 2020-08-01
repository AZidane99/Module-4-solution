var array=["adnane","joey","John","zidane","coursera","Jessica"];
console.log(array);
for(var i=0;i<array.length;i++){
    if(array[i].startsWith("j") || array[i].startsWith("J") ){ 
    console.log("Goodbye :"+ array[i]);
}
else {
    console.log("hello: "+ array[i]);
}
};
