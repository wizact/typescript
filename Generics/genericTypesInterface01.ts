interface GenericIdentity<T> {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

var myId: GenericIdentity<number> = identity;
myId(1);