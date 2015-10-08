/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
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
