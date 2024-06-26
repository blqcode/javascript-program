function sorting(a,b){
    a.forEach (i =>{
        console.log(a.indexOf(i))
        
    });
    console.log('___________________________________')
    b.forEach(i=>{
        console.log(b.indexOf(i))
    })
    return a+b
}
console.log(sorting([32,23,5,6,3,235445,543], [1,4,43,567,0,8765,65,32]));

