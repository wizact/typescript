var Validation;
(function (Validation) {
    var LettersOnly = (function () {
        function LettersOnly() {
        }
        LettersOnly.prototype.isValid = function (s) {
            return /^[A-Za-z]+$/.test(s);
        };
        return LettersOnly;
    }());
    Validation.LettersOnly = LettersOnly;
})(Validation || (Validation = {}));
//# sourceMappingURL=LettersOnlyValidation.js.map