"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MethodDecorator;
(function (MethodDecorator) {
    function logger(message) {
        return function (target, propertyKey) {
            console.log(message, target, propertyKey);
        };
    }
    var Greeter = (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        __decorate([
            logger('heeeyy!'), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], Greeter.prototype, "greet", null);
        return Greeter;
    }());
    var g = new Greeter("World!");
    console.log(g.greet());
})(MethodDecorator = exports.MethodDecorator || (exports.MethodDecorator = {}));
//# sourceMappingURL=method-decorator.js.map