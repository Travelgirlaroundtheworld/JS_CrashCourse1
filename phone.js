const Chalk = require('chalk'); 

module.exports = class Phone {
    constructor(name, color, price) {
        this.name = name
        this.price = price
        this.color = color
      }};

   phone1 = new Phone("Iphone", "black", 1000)
   phone2 = new Phone("Nokia", "silver", 100)
   phone3 = new Phone("Samsung", "navy", 500)
   
   vanessa = new Person("Vanessa", 26)
   maik = new Person("Maik", 53)
   inna = new Person("Inna", 53)
   
   vanessa.greet(phone3)
   maik.greet(phone2)
   inna.greet(phone1)
   vanessa.pay(phone3)
   maik.pay(phone2)
   inna.pay(phone1)
   vanessa.color(phone3)
   maik.color(phone2)
   inna.color(phone1)

   printName = person => console.log(Chalk.bgGreen(person.name));
   