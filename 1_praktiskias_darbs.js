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
console.log(reverseString('This is very cool'));

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
console.log(rez);

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
console.log(sum);

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
console.log(sum);

function threeElements() {
    if (numbers.length == 3 ) {
        len = "True. 3 elementi";
      } 
      else{
        len = "False. nav 3 elementi";
      }
}
threeElements(numbers);
console.log(len)
