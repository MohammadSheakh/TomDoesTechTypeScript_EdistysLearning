type Id = number | string;

function swapIdType(id:Id){
    if(typeof id === 'number'){
        return id.toString();
    } else {
        return parseInt(id);
    }
}

console.log(swapIdType(1));
console.log(swapIdType('1'));

//-------------------------------------------- Tagged Interface .. 
interface User1 {
    type: 'user1',
    name : string,
    age : number,
}

interface User2 {
    type: 'user2',
    nameAgain : string,
    age : number,
}
function logDetails(value: User1 | User2): void{
    // if('name' in value){
    //     console.log(value.name);
    // } else {
    //     console.log(value.nameAgain);
    // }
    if(value.type === 'user1'){
        console.log(value.name);
    } else {
        console.log(value.nameAgain);
    }
}