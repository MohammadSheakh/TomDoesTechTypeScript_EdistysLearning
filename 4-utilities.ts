interface myInterface {
    property1 : string
    property2 ?: string
    property3 ?: string
}

const obj: Partial<myInterface> = {
    // shob gula property optional hoye jabe
};

const obj2: Omit<myInterface, 'property1'> = {
    // jeta 2nd parameter hishebe pass korbo, seta e optional hoye jabe
    // property1: 'Hello', // eita error dibe .. karon property1 ke omit kora hoyeche
    property2: 'Hello',
}

