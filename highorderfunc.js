function multipleGreet(a,num){
    for(let i=1;i<=num;i++){
        a();
        
    }
}

function Greet(){
    console.log("Heyy")
}

multipleGreet(Greet,5)