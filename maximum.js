let arr = [1,2,3,4,2,1,2,4,5,6,8,7,5,3,1,2,5,7,7,9,8,76,4,3,2,1,12,4];

let nums = arr.reduce( (a,b) => {
    if (a>b){
        return a;
    }
    else{
        return b;

    }
    
})

console.log(nums)
