function func1(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

function func2(firstName: string, lastName?: string) {
    if(lastName){
        return firstName + lastName;
    }

    return firstName;
}

function func3(firstName: string, lastName= "Smith") {
    return firstName + lastName;
}

function func4(firstName: string, lastName= "Smith", restOfNames: string[]) {
    return firstName + lastName + restOfNames.join(" ");
}

console.log(func1("Apple", "Seed"))
console.log(func2("Apple"));
console.log(func3("Apple"));
console.log(func4("Apple", "Seed", ["Juice", "Orange"]));