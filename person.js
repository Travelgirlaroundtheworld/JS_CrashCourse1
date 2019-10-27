module.exports = class Person {  
        constructor(name, age) {
          this.name = name
          this.age = age
        }
        greet(phone){
          console.log("Hi, I am " + this.name + " and I am going to buy a " + phone.name + ".")
        }
        color(phone) {
          console.log(this.name + "'s phone is " + phone.color + ".")
        }
        pay(phone) {
          console.log(this.name + " has to pay " + phone.price + "€.")
        }
       };