var Validation;
(function (Validation) {
    var LettersOnly = (function () {
        function LettersOnly() {
        }
        LettersOnly.prototype.isValid = function (s) {
            return /^[A-Za-z]+$/.test(s);
        };
        return LettersOnly;
    })();
    Validation.LettersOnly = LettersOnly;
    var ZipCodeOnly = (function () {
        function ZipCodeOnly() {
        }
        ZipCodeOnly.prototype.isValid = function (s) {
            return s.length === 5 && /^[0-9]+$/.test(s);
        };
        return ZipCodeOnly;
    })();
    Validation.ZipCodeOnly = ZipCodeOnly;
})(Validation || (Validation = {}));
var validators = {};
validators['Letters Only'] = new Validation.LettersOnly();
validators['ZipCode Only'] = new Validation.ZipCodeOnly();
['Hello', '98052', '101'].forEach(function (s) {
    for (var name in validators) {
        console.log(validators[name].isValid(s));
    }
});
