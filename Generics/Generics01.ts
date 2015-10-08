function identity<T>(arg: T): T {
    if (typeof arg == "number") {
        return arg;
    }

    return arg;
}

var output1 = identity<string>("Smith");
var output2 = identity<number>(1);


function identities<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}