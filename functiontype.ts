module FuncTypes {
	var myFuncType : (x: number, y: number)=> number;
	myFuncType = function(x: number, y: number): number {
	    return x + y;
	}

	console.log(myFuncType(1, 2));
}
