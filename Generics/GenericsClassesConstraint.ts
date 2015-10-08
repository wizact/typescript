interface HasLengthProperty {
    length: number;
}

function logId<T extends HasLengthProperty>(arg: T) {
    console.log(arg.length);
}