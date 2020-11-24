
function Person (first, last, age, gender, interests) {
        this.name = {
           first:first,
           last : last
        };
        this.age = age;
        this.interests = interests;
        this.gender = gender;
        this.bio = function() {
            let gend = this.gender ==='m' ? 'He' : 'She';
            alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + gend +' likes ' + this.interests[1] + '.');
        };

        this.greeting = function () {
            alert('Hi I am ' + this.name.first + '.');
        };
}
let par = document.querySelector('p');
let p1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.adFun = function() {console.log('From adFun');};
