class GenericNumber<T> {
    add: (x: T, y: T) => T;
}

var myNum = new GenericNumber<number>();
myNum.add(1, 2);