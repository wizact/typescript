"use strict";
function BasicTypes() {
    var isDone = false;
    var height = 6;
    var name = 'Slim';
    name = 'Shady';
    var list1 = [1, 2, 3];
    var list2 = [3, 2, 1];
    var Color;
    (function (Color) {
        Color[Color["None"] = 0] = "None";
        Color[Color["Red"] = 2] = "Red";
        Color[Color["Green"] = 4] = "Green";
        Color[Color["Blue"] = 8] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
    console.log(c);
    var colorName = Color[1];
    console.log(colorName);
    var variantType = 4;
    variantType = "variant";
    variantType = false;
    var list3 = [1, true, 'free'];
    list3[1] = 100;
    function routine() {
        console.log('nothing to return');
    }
}
exports.BasicTypes = BasicTypes;
//# sourceMappingURL=basictypes.js.map