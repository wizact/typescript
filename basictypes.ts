// Primitive types
var isDone: boolean = false;
var height: number = 6;
var name: string = 'Slim';
name = 'Shady';

// Arrays
var list1: number[] = [1, 2, 3];
var list2: Array<number> = [3, 2, 1];

// Enums
enum Color { None = 0, Red = 2, Green = 4, Blue = 8 };
var c: Color = Color.Green;

console.log(c);

var colorName: string = Color[1];
console.log(colorName);

// Any type
var variantType: any = 4;
variantType = "variant";
variantType = false;

var list3: any[] = [1, true, 'free'];
list3[1] = 100;

// Void
function routine(): void {
    console.log('nothing to return');
}