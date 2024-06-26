let res=1
function fact(i){
   
    if(i==0){
        res=1;
        return res;
        


    }
    else if(i>1){
        res *=i;
        i=i-1;
        
        fact(i);
        
        return res;
       
    }
    else{
        return;
        }
    
}
console.log(fact(6))