interface LabelledValue {
	label: string;
	color?: string;
}

function printLabel(labelledObj: LabelledValue){
	console.log(labelledObj.label);
}

var myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);


// Function types
interface SearchFunc {
	(source: string, subString: string): boolean;
}

var searchFunc: SearchFunc;
searchFunc = function (source: string, subString: string) {
	var result = source.search(subString);
	return (result === -1) ? false : true;
}

// Array types
interface StringArray {
	[index: number]: string;
}

var myArray: StringArray;
myArray = ['Bob', 'Fred'];

// Class types
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}

class Clock implements ClockInterface {
	currentTime: Date;
	
	setTime(d: Date) {
		this.currentTime = d;
	}
	
	constructor(h: number, m: number) {

	}
}

// Static class

interface StaticClockInterface {
	new (hour: number, minute: number);
}

class StaticClass {
	currentTime: Date;
	constructor(hour: number, minute: number) {}
}

var c: StaticClockInterface = StaticClass;
var newClock = new c(1, 2);

// Extending interfaces
interface Shape {
	color: string;
}

interface Square extends Shape {
	sideLength: number;
}

var square = <Square>{};
square.color = 'blue';
square.sideLength = 10;