var phone = {
  manufacturer: "apple",
  model: "iphone x",
  price: 70000,
  chipSet: "bionic 13",
  camera: "18 mp",
  info: function () {
    console.log(
      `the product ${this.model} is from ${this.manufacturer} and is priced at ${this.price} as it has the powerful ${this.chipSet}`
    );
  },  
};

var tab = {
  manufacturer: "apple",
  model: "ipad",
  price: 70000,
  chipSet: "bionic 16",
  camera: "20 mp",
};
phone.info.bind(tab)();
phone.info();
class stud {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`name is ${this.name} age is ${this.age}`);
  }
}
var s1 = new stud("gokul", 19);
s1.show();
var s2 = new stud("shaw", 19);
s2.show();
