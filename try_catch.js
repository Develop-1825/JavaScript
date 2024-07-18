let person = {
    fName: "Arghyajyoti",
    lName: "Mondal",
    get fullName() {
        return `${this.fName} ${this.lName}`
    },
    set fullName(value) {
        if (typeof (value) !== String)
        {
            throw new Error("You have not sent a string"); //create a new Error object and send for the catch block to catch
        }
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
};


console.log(person.fullName); //invoking get method
try {
    
    person.fullName = true;// invoking setter.
    //throws an error that the catch block stores in 'e'
}
catch (e) {
    console.log(e);
    // console.log("HIi");
    // alert(e);
}
// console.log(person.fullName);