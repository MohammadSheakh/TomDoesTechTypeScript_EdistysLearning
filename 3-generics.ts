function myFunc<Type>(input:Type):Type{
    return input;
}


// now input can be object or array .. 
// for this we can use generic .. 

const result = myFunc<{name:string}>({
    name : "Tom"
});

const result2 = myFunc<string[]>(
            ["Tom"]
);