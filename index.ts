let age: number = 21;

let array: number[] = [1, 2, 3];

// tuple
let pid: string | number = '21';

// enumm
enum Direction {
    Up = 45,
    Right,
    Down,
    Left
}
console.log(Direction.Down);

// interface
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}
let user1: UserInterface = {
    id: 32,
    name: "Stanly"
}
// user1.id = 22  // not working (readonly for id)


// classes
interface PersonInterface {
    id: number,
    name: string,
    age?: number,
    register(): string
}
class Person implements PersonInterface {
    public id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registed`
    }
}

const jim = new Person(54, 'Jim Bond');
jim.id = 88; // because id is 'public'

// extends class (subClass)
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(43, "Rick", "Developer");
console.log(emp.position);
console.log(emp.register());

// generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['one', 'two']);