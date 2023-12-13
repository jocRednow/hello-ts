var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 21;
var array = [1, 2, 3];
// tuple
var pid = '21';
// enumm
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 45] = "Up";
    Direction[Direction["Right"] = 46] = "Right";
    Direction[Direction["Down"] = 47] = "Down";
    Direction[Direction["Left"] = 48] = "Left";
})(Direction || (Direction = {}));
console.log(Direction.Down);
var user1 = {
    id: 32,
    name: "Stanly"
};
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registed");
    };
    return Person;
}());
var jim = new Person(54, 'Jim Bond');
jim.id = 88; // because id is 'public'
// extends class (subClass)
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(43, "Rick", "Developer");
console.log(emp.position);
console.log(emp.register());
// generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3]);
var strArray = getArray(['one', 'two']);
