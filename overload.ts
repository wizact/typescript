module overload {
	function register(x: number, y: number): number;
	function register(x: string, y: string): string;
	function register(x, y): any {
	    if (typeof x == "number" && typeof y == "number") {
	        return x + y;
	    }

	    if (typeof x == "string" && typeof y == "string") {
	        return x + " " + y;
	    }
	}
}