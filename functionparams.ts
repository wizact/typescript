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