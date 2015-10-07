class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}

var employee = new Employee();
employee.fullName = "John Smith";
console.log(employee.fullName);