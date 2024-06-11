// only difference is you can not extend a type ...
// types and interfaces are almost the same
interface MyInterface{
    // represent shape of something 
    property1 ?: string // providing ? makes it optional
    property2 : number
    property3 : boolean
}

// we can extend interfaces
interface MyInterface2 extends MyInterface{
    property4 : string
}


// i can use my interface  as the input for a function or i can use it as the output.

function myFunction(input: MyInterface2): MyInterface{

    return input;
}

// const d = myFunction({property4 :"#"}) // 🔴 error... 


function myFunction2(input: MyInterface): void{
    // if function does not return anything, we can use void .. 

}

async function myFunction3(input: MyInterface): Promise<MyInterface>{
    // if function is an async function .. then we can specify the return type as
    // Promise generic ..

    return input;
}


type MyType = {
    property1 ?: string
    // you cant extend types .. 
}
type MyType2 = {
    property2 ?: string
    // you cant extend types .. 
} & MyType // now Property1 is also available in MyType2

function myFunction4(input: MyType2): MyType{

    return input;
}
myFunction4({property1: "hello", property2: "world"})

//----------------------------------------------------------------------------------

// enums are basically js object .. and they will define a list of properties
// defines a set of constant values
enum MyEnum{
    property1 = "property1",
    property2 = "property2",
    property3 = "property3",
}

/// i can use enums inside type .. 
type MyType3 = {
    property1 ?: MyEnum
    
}

function myFunction5(input: MyType3): MyType3{

    return input;
}
myFunction5({property1 : MyEnum.property3})

// enums are basically js object
Object.values(MyEnum).map; // it will convert the enum to an array of values
// also Ojbect.keys() can be used..



//----------------------------------------------------------- library

// @types/ name of the library that you wanna install the type from -D