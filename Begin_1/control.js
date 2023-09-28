


((month) => {
    switch (month) {
        case 1:
            console.log("January");        
            break;
        case 2:
            console.log("Feb");        
            break;
        case 3:
            console.log("March");        
            break;
        case 4:
            console.log("April");        
            break;
    
        default:
            break;
    }
    
})(3);


// falsy value:- false, 0, -0, null, NaN, bigint 0n, undefined, ""


//Nullish coalescing operator ??  for null and undefined

let v1 = null ?? 5
console.log(v1);