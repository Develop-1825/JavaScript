let person = {
    fName: "Arghyajyoti",
    lName: "Mondal",
    get fullName() {
        return `${this.fName} ${this.lName}`
    },
    set fullName(value) {
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
};


console.log(person.fullName); //invoking get method
person.fullName = "Nunu Kumar";// invoking setter.
console.log(person.fullName);