// tuple .. onek ta array er moto ... 
// different type ... specific order .. 

let persion :[ string, number, boolean] = [
    "boom",
    332,
    false
]

// tuple example

// color code
let hsla :[number, string, string, number] = [
    200, '100%', '50%', 1
]

// co ordinates 
let xy :[number, number] = [
    200, 1
]

function useCoords() : [number, number] {
    const lat = 2
    const long = 3

    return [lat, long]
}

const [lat, long] = useCoords()

//-------------------------------------- Named Tuple

let user2 : [name : string, age : number]

user2 = ['mohammad', 2]

console.log(user2[0]);