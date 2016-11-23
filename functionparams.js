function func1(firstName, lastName) {
    return firstName + " " + lastName;
}
function func2(firstName, lastName) {
    if (lastName) {
        return firstName + lastName;
    }
    return firstName;
}
function func3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + lastName;
}
function func4(firstName, lastName, restOfNames) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + lastName + restOfNames.join(" ");
}
console.log(func1("Apple", "Seed"));
console.log(func2("Apple"));
console.log(func3("Apple"));
console.log(func4("Apple", "Seed", ["Juice", "Orange"]));
//# sourceMappingURL=functionparams.js.map