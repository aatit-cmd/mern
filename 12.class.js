//! class

// let john = {
//     name: "John",
//     email: "john@example.com",
//     password: "john123"
// }

// let user = {
//     name: "user",
//     email: "user@example.com",
//     password: "user123"
// }

class User {
  // name; // if the variable is public it is optional to declare it here but we must declare private property
  // email;
  #password; //* private property
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  introduce() {
    console.log("this is parent class");
  }
}

let john = new User("John Doe", "john@example.com", "john123");
let ram = new User("ram Doe", "ram@example.com", "ram123");
//console.log(john);
console.log(ram.name);
console.log(ram["email"]);
console.log(ram);
//console.log(ram.#password) // we can not access private
console.log(ram.getPassword());

ram.introduce();

//! Student(name,email,password,faculty,roll,batch)
// inheritance
class Student extends User {
  faculty;
  roll;
  batch;
  //super()
  constructor(name, email, password, faculty, roll, batch) {
    super(name, email, password);
    this.faculty = faculty;
    this.roll = roll;
    this.batch = batch;
  }
  getFaculty() {
    return this.faculty;
  }
  getRoll() {
    return this.roll;
  }
  getBatch() {
    return this.batch;
  }
  //polymorphism
  introduce() {
    console.log("this is child class");
  }
}

let std = new Student("ram", "ram@gmail.com", "1234", "BCT", 72, "079");

console.log(std);
console.log(std.getPassword());
std.introduce();

//* abstraction
class MakeCoffe {
  start() {
    console.log("start");
    this.#grinding()
    this.#heatingwater()
    this.#processing()
    this.#dispatch()
  }
  #grinding() {
    console.log("grindign");
  }

  #heatingwater() {
    console.log("heating water");
  }
  #processing(){
    console.log("processing")

  }
  #dispatch(){
    console.log("Coffee is ready")
  }
}

const cm = new MakeCoffe();
cm.start()


//todo: static method, getter, setter

class Circle{
    radius;
    constructor(r){
        this.radius=r;
    }

    set rad(r){
        this.radius=r;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

const c1 = new Circle(10);

console.log(c1.area)
c1.rad=5
console.log(c1.area)


