
Person = class {
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
Phone = class {
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
   
