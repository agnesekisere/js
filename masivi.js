let arr = ["Volvo", "BMW", "Opel", "Audi", "VAZ", "Lada" ]
let arr1=arr.shift()
// nodzēst masīva pirmo elementu
let arr2=arr.slice(1)
console.log(arr)
console.log(arr1)
console.log(arr2)
// nodzēst pēdējo elementu
let arr3=arr.slice(0,arr.length-1)
console.log(arr3)
// iestarpināt masīvā 2 elementus
arr.splice(2, 0, "VW", "Range Rover")
console.log(arr)
// sakartot alfabeta seciba
console.log(arr.sort())
// apgriezt otrādies
console.log(arr.reverse())
// izvadīt pa vienam elementam
arr.forEach((el, index) => console.log("Masiva", index, "elements: ", el))
// arr.map((el, index) => console.log("Masiva", index, "elements: ", el))




// 6. noteikt vai dotais mainigais ir masivs
let isArray = Array.isArray(arr)
console.log(isArray)

// let isArray1 = (arr instanceof Array) ? true: false
// console.log(isArray1)

// 7. noteikt vai masivs satur elementu "mersedes"
if (arr.includes("Mersedes")){
    console.log('includes')
} 
else {
 console.log('dont includes')
}

// 8. noteikt elementa "opel" indeksu masiva

let indexopel= arr.indexOf("Opel")
// parbaudit vai tas atkartojas
let index2opel= arr.lastIndexOf("Opel")
console.log(indexopel)
console.log(index2opel)
if(indexopel==index2opel){
    console.log('element dont repeats', indexopel)
}
else{
    console.log('elements repeats', indexopel)
}
// 9. 2 masivi teksta virkne
let arrr=[1, 2]
let arrr1=[3, 6, 5]
let arrr2=arrr.concat(arrr1)
console.log(arrr2.toString())

// pievienot masiva beigas elementu un sakartot augosa seciba
arrr2.push('Skoda');
// console.log(arr)
console.log(arrr2.reverse().sort())

// 10. izveidot objektu (firstname, lastname, dateofbirth, gender, tripplaces)
var person = {
    firstName:"John", 
    lastName:"Snow", 
    dateOfBirth:"24.12.1996", 
    gender:"male", 
    tripList: ['Latvia', 'Spain', 'Italy'], 
    // fullName : function () {
    //     return this.firstName + " " + this.lastName + " " + this.dateOfBirth;
    // },
    changeName : function (name) {
        this.firstName=name;
    },
    addTrip : function (trip) {
        this.tripList.push(trip);
    },
    printTrips : function () {
        return this.tripList;
    }
} 
// 11. pievienot objektam metodi, kas izvada info  par objektu (firstname, lastname, dateofbirth)
// console.log(person);
// console.log(person.fullName());
// person.changeName('Walter');
// console.log(person.fullName());

// Pievienot jaunu ceļojuma vietu
person.addTrip('Lithuania');
// console.log(person.tripList);
console.log(person.printTrips());

// Izveidot klasi
class Human {
    constructor(firstName, lastName,dateOfBirth, gender, tripList) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.tripList = tripList;
    }
    get fullName(){
        return this.firstName + " " + this.lastName + " " + this.dateOfBirth;
    }
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}
let tripList = ['Latvia', 'Spain', 'Italy'];
let human = new Human('walter', 'smith', '12.12.1990', 'male', tripList);
console.log(human.fullName);
human.fullName = 'Bred Pitt';
console.log(human.fullName);
