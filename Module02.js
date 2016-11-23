var ValidationModule;
(function (ValidationModule) {
    var LettersOnly = (function () {
        function LettersOnly() {
        }
        LettersOnly.prototype.isValid = function (s) {
            return /^[A-Za-z]+$/.test(s);
        };
        return LettersOnly;
    }());
    ValidationModule.LettersOnly = LettersOnly;
    var ZipCodeOnly = (function () {
        function ZipCodeOnly() {
        }
        ZipCodeOnly.prototype.isValid = function (s) {
            return s.length === 5 && /^[0-9]+$/.test(s);
        };
        return ZipCodeOnly;
    }());
    ValidationModule.ZipCodeOnly = ZipCodeOnly;
})(ValidationModule || (ValidationModule = {}));
var validators = {};
validators['Letters Only'] = new ValidationModule.LettersOnly();
validators['ZipCode Only'] = new ValidationModule.ZipCodeOnly();
['Hello', '98052', '101'].forEach(function (s) {
    for (var name in validators) {
        console.log("Value " + s + " with filter " + name + " yeilds " + validators[name].isValid(s));
    }
});
//# sourceMappingURL=Module02.js.map