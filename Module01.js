var LettersOnly = (function () {
    function LettersOnly() {
    }
    LettersOnly.prototype.isValid = function (s) {
        return /^[A-Za-z]+$/.test(s);
    };
    return LettersOnly;
})();
var ZipCodeOnly = (function () {
    function ZipCodeOnly() {
    }
    ZipCodeOnly.prototype.isValid = function (s) {
        return s.length === 5 && /^[0-9]+$/.test(s);
    };
    return ZipCodeOnly;
})();
var validators = {};
validators['Letters Only'] = new LettersOnly();
validators['ZipCode Only'] = new ZipCodeOnly();
['Hello', '98052', '101'].forEach(function (s) {
    for (var name in validators) {
        console.log(validators[name].isValid(s));
    }
});
