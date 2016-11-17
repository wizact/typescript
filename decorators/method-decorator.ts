export module MethodDecorator {    
    function logger(message: string): PropertyDecorator {
        return function (target: Object, propertyKey: string | symbol) {
            console.log(message, target, propertyKey);
        };
    }
    
    class Greeter {
        greeting: string;
        constructor(greeting: string) {
            this.greeting = greeting;
        }

        @logger('heeeyy!')
        greet() {
            return `Hello, ` + this.greeting;
        }
    }

let g = new Greeter("World");
console.log(g.greet());
}