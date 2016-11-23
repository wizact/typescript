var Generics01;
(function (Generics01) {
    function identity(arg) {
        if (typeof arg == "number") {
            return arg;
        }
        return arg;
    }
    var output1 = identity("Smith");
    var output2 = identity(1);
    function identities(arg) {
        console.log(arg.length);
        return arg;
    }
})(Generics01 || (Generics01 = {}));
//# sourceMappingURL=Generics01.js.map