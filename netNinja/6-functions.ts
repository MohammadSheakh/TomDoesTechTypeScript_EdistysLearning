/// functions ----------------------------

function addTwoNumbers(a:number, b:number):number {
    return a+ b
}

// arrow function 
const substractTwoNumber = (a:number, b:number):number => {
    return a-b
}

function addAllNumbers(items:number[]):void |number {
    const total = items.reduce((acc, item) => acc + item, 0)
    //return total;
    console.log(total);
}


/// return type inference -----------------