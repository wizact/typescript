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
//# sourceMappingURL=functionparams.js.map