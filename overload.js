function register(x, y) {
    if (typeof x == "number" && typeof y == "n") {
        return x + y;
    }
    if (typeof x == "string" && typeof y == "string") {
        return x + " " + y;
    }
}
