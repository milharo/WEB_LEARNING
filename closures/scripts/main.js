'use strict';
let animal = {
    eats:true,
    walk() {
        console.log('Animal walks');
    },
    sleep() {
        this.isSleeping = true;
    },
    wake() {
        this.isSleeping = false;
    }

};
let rabbit = {
    jumps : true,
    walk() {
        console.log('I jump!');
    },
    __proto__:animal

};

let longear = {
    earLength:10,
    __proto__:rabbit,
    walk() {
        console.log('My ears are fluttering');
    }
};

let user = {
    name: 'John',
    surname: 'Smith',
    set fullName(value) {
    [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user, 
    isAdmin: true
};

console.log(admin.fullName);

admin.fullName = 'Alice Cooper';

console.log(admin.fullName);
console.log(user.fullName);

for ( let prop in animal) {
    if (animal.hasOwnProperty(prop)) console.log(prop);
}
for ( let prop in rabbit) {
    if (rabbit.hasOwnProperty(prop)) console.log(prop);
}
for ( let prop in longear) {
    if (longear.hasOwnProperty(prop)) console.log(prop);
}

let prm = new Promise(function(resolve, reject) { resolve(10) });
prm.then(function(value) {console.log(value)});
prm.finally(function() {console.log('sme skoncili')});