function table(x){
    for(let i=1;i<=100;i++){
        let num = x*i;
        console.log(`${x} * ${i} = ${num} `);
    }
}

inputNumber = parseInt(prompt("Enter the number"));

table(inputNumber);