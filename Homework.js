
Person = class{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(person){
        console.log("Hi, I am " + this.name + "and I am going to buy " + this.phone)
    }
};


Phone = class {
    constructor(name, color, price){
        this.name = name
        this.color = color
        this.price = price
    }
    buy(phone){
        this.phone = phone
        console.log("Yay, welcome to " + this.phone + "!")
    }
    pay(phone) {
        console.log("You have to pay" + this.price + "!")
    }
};

phone1 = new Phone("iPhone", "black", 1000)
phone2 = new Phone("nokia", "silver", 100)
phone3 = new Phone("Samsung","navy", 500)

vanessa = new Person("Vanessa", 26)
maik = new Person("Maik", 53)
inna = new Person("Inna", 53)

vanessa.buy("phone3")
inna.buy("phone1")
maik.buy("phone2")