function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'size 10 object' };
printLabel(myObj);
var searchFunc;
searchFunc = function (source, subString) {
    var result = source.search(subString);
    return (result === -1) ? false : true;
};
var myArray;
myArray = ['Bob', 'Fred'];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var StaticClass = (function () {
    function StaticClass(hour, minute) {
    }
    return StaticClass;
}());
var c = StaticClass;
var newClock = new c(1, 2);
var square = {};
square.color = 'blue';
square.sideLength = 10;
//# sourceMappingURL=interfaces.js.map