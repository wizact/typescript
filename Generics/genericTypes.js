var GenericTypes;
(function (GenericTypes) {
    function identity(arg) {
        if (typeof arg == "number") {
            return arg;
        }
        return arg;
    }
    var myId = identity;
    myId("Hi");
})(GenericTypes || (GenericTypes = {}));
//# sourceMappingURL=genericTypes.js.map