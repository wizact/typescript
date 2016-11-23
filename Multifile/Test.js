var validators = {};
validators['Letters Only'] = new Validation.LettersOnly();
validators['ZipCode Only'] = new Validation.ZipCodeOnly();
['Hello', '98052', '101'].forEach(function (s) {
    for (var name in validators) {
        console.log(validators[name].isValid(s));
    }
});
//# sourceMappingURL=Test.js.map