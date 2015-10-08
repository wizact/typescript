function identity<T>(arg: T): T {
    if (typeof arg == "number") {
        return arg;
    }

    return arg;
}

var myId: <U>(arg: U) => U = identity;

myId("Hi");

