var overload;
(function (overload) {
    function register(x, y) {
        if (typeof x == "number" && typeof y == "number") {
            return x + y;
        }
        if (typeof x == "string" && typeof y == "string") {
            return x + " " + y;
        }
    }
})(overload || (overload = {}));
//# sourceMappingURL=overload.js.map