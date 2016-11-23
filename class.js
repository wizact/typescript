var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasicClass;
(function (BasicClass) {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("world");
    var Animal = (function () {
        function Animal(theName, extinct) {
            this.extinct = extinct;
            this.name = theName;
        }
        Animal.prototype.move = function (meters) {
            if (meters === void 0) { meters = 0; }
            console.log(this.name + " moved " + meters + "m.");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            _super.call(this, name, false);
        }
        Snake.prototype.move = function (meters) {
            if (meters === void 0) { meters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, meters);
        };
        return Snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            _super.call(this, name, false);
        }
        Horse.prototype.move = function (meters) {
            if (meters === void 0) { meters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, meters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy yhe Palomino");
    sam.move();
    tom.move(34);
})(BasicClass || (BasicClass = {}));
//# sourceMappingURL=class.js.map