// 1. Izveidot funkciju, kas apgriež doto teksta virkni apgrieztā secībā.
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "".split("");
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = [""].reverse();
    
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = [""].join("");
  
    //Step 4. Return the reversed string
    return joinArray; // ""
}
reverseString('This is very cool');
console.log('1.uzd. ', reverseString('This is very cool'));

// 2. Izveidot funkciju, kas salīdzina divus skaitļus un atgriež patiess, ja kāds no
// dotajiem skaitļiem vai to summa ir 5. Pretējā gadījumā atgriež nepatiess.
var num1=2;
var num2=3;
function compareNumbers() {
    if (num1==5 ) {
        rez = "True";
      } 
      else if (num2==5) {
        rez = "True";
      }
      else if ((num1 + num2)==5) {
        rez = "True";
      }
      else {
        rez = "False";
      }
}
compareNumbers(num1, num2)
console.log('2.uzd. ', rez);

// 3. Izveidot funkciju, kas saskaita dotos masīva elementus un atgriež summu
var numbers = [15.5, 2.3, 1.1, 4.7];
var sum = 0;
function arrSum() {
    for (var i = 0; i < numbers.length; i++) 
    {
        sum += numbers[i]
    }
}
arrSum(numbers);
console.log('3.uzd. ', sum);

// 4. Izveidot funkciju, kas saskaita masīva ar trim elementiem summu un atgriež to.
// Funkcijā ieviest pārbaudi, vai masīvā ir doti elementi, vai tie ir skaitļi un vai ir doti
// trīs elementi.
var numbers = [5, 7, 9];
var sum = 0;
function arrSum() {
    for (var i = 0; i < numbers.length; i++) 
    {
        sum += numbers[i]
    }
}
arrSum(numbers);
console.log('4.uzd. ', sum);

// vai ir doti 3 elementi
function threeElements() {
    if (numbers.length == 3 ) {
        len = "True. 3 elementi";
      } 
      else{
        len = "False. nav 3 elementi";
      }
}
threeElements(numbers);
console.log('4.uzd. ', len)

// 5. Izveidot funkciju, kura atgriež divu doto veselo skaitļu summu, ja tie nesakrīt vai
// trīskāršo skaitļu summu, ja tie sakrīt.
a=5;
b=2;
ssum=0;
function veseloSum() {
  if(a==b){
    ssum=3*(a+b);
  }else{
    ssum=a+b;
  }
}
veseloSum(a,b);
console.log('5.uzd. ', ssum);

// 6. Izveidot funkciju, kas saņem lietotāja vārdu un paroli. Ja kāds no mainīgajiem
// nav ievadīts vai paroles garums ir mazāks par 12 simboliem, izvada atbilstošo
// kļūdas paziņojumu.
var name = 'lietotajas';
var passw = 'parole'
function login() {
  if(passw.length<12){
    return 'Paroles garumam jabut vismaz 12 simboliem'
  }
  else if(name.length==0) {
    return 'Nav ievadits lietotaja vards'
  }
  else if(passw.length==0) {
    return 'Nav ievadita parole'
  }
  else{
    return 'viss ok'
  }
}
console.log('6.uzd. ', login());

// 7. Izveidot funkciju, kas no dotā masīva izņem pirmo un pēdējo elementu un
// atgriež jaunu masīvu. Jaunā masīva elementu skaits var būt viens vai divi.
// Funkcija ieviest nepieciešamās pārbaudes un paziņojumu izvadi.
var fruits = ['Mango', 'Banana', 'Apple', 'Kiwi'];
function firstAndLast() {
  fruits.pop();
  fruits.shift();
  // return fruits;
  if(fruits.length>2){
    return 'Masiva vairāk kā 2 elementi'
  }
  else if (fruits.length<1) {
    return 'Masiva nav elementu'
  }
  else{
    return fruits;
  }
}
console.log('7.uzd. ', firstAndLast());

// 8. Izveidot objektu Raksts ar šādām īpašībām: virsraksts, autors, saturs, patik.
// Īpašībai patīk jābūt masīvam, kurā iespējams pievienot un dzēst elementus.
// Izveidot metodes: lasīšanas ilgums, pieskirtPatik un nonemtPatik.
// Lasīšanas ilgums jāaprēķina izdalot satura daļas simbolu skaitu ar 1500 (vidējais
// simbolu skaits minūtē) un rezultātu izvadīt minūtēs un sekundēs.
// Metode pieskirtPatik pievieno unikālu id masīvā patik.
// Metode nonemtPatik izdzēš no masīva patik elementu ar unikālu id.
var raksts = {
  virsraksts:"GoT", 
  autors:"John Snow", 
  saturs:"Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one. Winter will be back at April. This will be the coldest one.",
  patik: ["Janis", "Toms", "Anna"],
  lasisanasIlgums: function() {
    var min = raksts.saturs.length/25; // 1500 : 60
    var minutes = Math.floor(min / 60); // parverš skaisti minutes
    var seconds = (min/60 - minutes) * 60; // apreķina atlikumu no minutem un parverš to sekundes
    return 'Lasīšanas ilgums: ' + minutes + 'min. '  + Math.round(seconds) + 'sec.';
  },
  pieskirtPatik: function(like) {
    this.patik.push(like);
  },
  nonemtPatik: function() {
    for( var i = raksts.patik.length-1; i--;){
      if ( raksts.patik[i] === 'Anna') raksts.patik.splice(i, 1);
      }
  },
  printPatik: function() {
    return this.patik;
  }
}
// console.log('8.uzd. ', raksts);
console.log('8.uzd.', raksts.lasisanasIlgums());
raksts.pieskirtPatik('Inga');
console.log('8.uzd. Piešķirt patik: ', raksts.printPatik());
raksts.nonemtPatik();
console.log('8.uzd. Noņemt patik ', raksts.printPatik());


// 9. Izveidot klasi Uznemums ar īpašībām: nosaukums, forma (sia, as, mu, bo),
// registrācijas dati (numurs, datums), juridiska adrese (iela, numurs, pilsēta,
//   novads, valsts, pasta indekss), tālrunis, nodokļu parādi, datu atjaunošanas
//   datums.
//   Pievienot tai get/set metodes. Get Paradi metode izvada datu atjaunošanas
//   datumu un nodokļu parādu. Set Paradi ļauj nomainīt nodokļu parādu lielumu un
//   datu atjaunošanas datumu.
class Uznemums{
  constructor(nosaukums, forma, regDat, jurAdr, tel, nodPar, atjDat){
    this.nosaukums=nosaukums, 
    this.forma=forma,
    this.regDat=regDat,
    this.jurAdr=jurAdr, 
    this.tel=tel, 
    this.nodPar=nodPar, 
    this.atjDat=atjDat
  }
  set Paradi(nodPar) {
    this.nodPar='250,00';
    this.atjDat='12.03.2019';
  }
  get Paradi() {
      return this.nodPar+ " " + this.atjDat;
  }
}
let firma = new Uznemums('Pucins', 'sia', 'LV36435237 28.07.2018', 'Rīgas iela - 55, Jelgava, Latvija, LV-3004', '+37128786923', '500,00', '11.03.2019');
// console.log('9.uzd. ',firma);
console.log('9.uzd. ',firma.Paradi);
firma.Paradi='250,00', '12.03.2019';
console.log('9.uzd. ',firma.Paradi);


//   10. Izveidot klasi SIA, kas manto klases Uzņēmums īpašības un metodes. Iestātīt
//   īpašībai forma vērtību ‘sia’ un pievienot papildus īpašības: pamatkapitāls,
//   dibinātājs (masīvs ar objektiem (vārds, uzvārds, personas kods). Pievienot
//   metodi pievienotDibinataju un dibinatajuSaraksts, kura izvada uzņēmuma
//   nosaukumu, reģistrācijas datumu un dibinātāju datus.
class SIA extends Uznemums{
  constructor(nosaukums, regDat, jurAdr, tel, nodPar, atjDat, pamatkap, dibinatajs){
    super(nosaukums, 'sia', regDat, jurAdr, tel, nodPar, atjDat);
    this.pamatkap=pamatkap, 
    this.dibinatajs=dibinatajs
  }
  pievienotDibinataju(dibinatajs) {
    this.dibinatajs=dibinatajs;
  }
  dibinatajuSaraksts() {
    return this.nosaukums+ " " + this.regDat+ " " + this.dibinatajs;
  }
  printDibinatajs() {
    return this.dibinatajs;
  }
}
let sia = new SIA('Pucins', 'LV36435237 28.07.2018', 'Rīgas iela - 55, Jelgava, Latvija, LV-3004', '+37128786923', '500,00', '11.03.2019', '1,00', 'Toms Kalnins 130489-65432');
// console.log('10.uzd. ', SIA);
console.log('10.uzd. ', sia.dibinatajuSaraksts());
sia.pievienotDibinataju('Janis Berzins 121290-12345');
console.log('10.uzd. ', sia.printDibinatajs());
