export module ClassDecorator {
    function sealed(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        console.log(`intercept`);
    }
    
    @sealed
    class Greeter {
        greeting: string;
        constructor(greeting: string) {
            this.greeting = greeting;
        }

        greet() {
            return `Hello, ` + this.greeting;
        }
    }

let g = new Greeter("World");
console.log(g.greet());
}