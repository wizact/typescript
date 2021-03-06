var StaticProp;
(function (StaticProp) {
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid = new Grid(1.0);
    console.log(grid.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid.calculateDistanceFromOrigin({ x: 6, y: 5 }));
})(StaticProp || (StaticProp = {}));
//# sourceMappingURL=staticprop.js.map