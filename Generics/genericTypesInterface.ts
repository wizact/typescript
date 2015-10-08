interface GenericIdentity {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

var myId: GenericIdentity = identity;
myId("A");