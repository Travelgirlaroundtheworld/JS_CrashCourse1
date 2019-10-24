
Person = class {
 constructor(name, age) {
   this.name = name
   this.age = age
 }
 greet(phone){
   console.log("Hi, I am " + this.name + " and I am going to buy a " + phone.name)
 }
 buy(phone) {
   console.log("Yay, welcome to " + phone.name + "!")
 }
 pay(phone) {
   console.log("You have to pay" + phone.price + "!")
 }
};
Phone = class {
 constructor(name, color, price) {
   this.name = name
   this.price = price
   this.color = color
 }};
phone1 = new Phone("iphone", "black", 1000)
phone2 = new Phone("nokia", "silver", 100)
phone3 = new Phone("Samsung", "navy", 500)
vanessa = new Person("Vanessa", 26)
maik = new Person("Maik", 53)
inna = new Person("Inna", 53)vanessa.greet(phone1)
maik.greet(phone2)
vanessa.buy(phone3)
