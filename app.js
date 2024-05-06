// String;
// 1.1 masala. Kiritilgan belgining kodini (ASCII nomerini) chiqaruvchi programma tuzilsin.

function getBelgi (txt, idx){
    let result = txt.charCodeAt(idx);
    return result;
}
// console.log(getBelgi('#' , 0));



// 2.2 masala. n butun soni berilgan (32 < n <= 126) kodi n ga teng bolgan belgini chiqaruvchi programma tuzilsin. 

    // let n = Number(prompt("32 dan katta 126 ga teng yoki kichik bo'lgan Ixtiyoriy butun son kiriting: " ));

function findCharacter() {
    if ( n > 32 && n <= 126){
        let character = String.fromCharCode(n);
        return character;
    }
}    

// console.log(findCharacter());




// 2.3 masala Kodlar jadvalida kiritilgan belgidan oldin va keyin turuvchi belgilarni chiqaruvchi programma tuzilsin.

// let str = prompt('kompyuteringizdagi ixtiyoriy belgini kiriting: ')

function findCharacterTwo(){
    let res1 = str.charCodeAt(0);
    let item1 = String.fromCharCode(res1 - 1);
    let item2 = String.fromCharCode(res1 + 1);
    return `ASCI jadvalidagi ${str} belgidan bitta oldindagi belgi: ${item1}, bitta keyingi belgi: ${item2}`;

}
// console.log(findCharacterTwo());



// 2.4 masala n butun soni berilgan ( 1 <= n <= 26 ).Lotin alfavitidagi n ta katta harflarni chiqaruvchi
// programma tuzilsin.

// let n = Number(prompt("1 dan katta 26 dan kichik bo'lgan butun son kiriting: "));

function alfavitN(){
    let str = 'A';
    let idx = str.charCodeAt(0);
    if (n >= 1 && n <= 26){
        for(let i = 0; i < Math.floor(n); i++){
            console.log(String.fromCharCode(idx + i));
        }
    }else {
        console.log('Damingni ol');
    }
}

// alfavitN()





// 2.5 masala n butun soni berilgan (1 <= n <= 26 ) lotin alfavitidagi n ta kichik harflarni teskari tartibda chiqaruvchi
// programma tuzilsin. Yani z dan a gacha chiqarilsin.

// let n = Number(prompt("1 dan katta 26 dan kichik bo'lgan butun son kiriting: "));

function alfavitN(){
    let str = 'z';
    let idx = str.charCodeAt(0);
    if (n >= 1 && n <= 26){
        for (let i = 0; i < Math.floor(n); i++){
            console.log(String.fromCharCode(idx - i));
        }
    }else {
        console.log('Damingni ol');
    }
}
// alfavitN()




// 2.6 masala Kiritilgan belgining nimaligini aniqlovchi programma tuzilsin.agar kiritilgan belgi raqam bo'lsa
// "digit" lotincha harf bo'lsa -"lotin" yozuvi chiqarilsin.Boshqa xolatlar uchun nol chiqarilsin.

// let character = prompt('Belgi: ')

function identifyCharacter(char) {
    if (!isNaN(parseInt(char))){
        return 'digit';
    }
    if(/[a-zA-Z]/.test(char)) {
        return 'lotin';
    }
    return 0;
}
// Test qilib ko'ramiz:
// console.log(identifyCharacter(character));




// 2.7 masala  Satr berilgan.Satrning birinchi va oxirgi belgisi kodini chiqaruvchi programma tuzilsin.

// let satr = prompt ('Satr kiriting: ');

function aniqla(a){
    let res1 = String(a).charCodeAt(0)
    let res2 = String(a).charCodeAt(String(a).length - 1)
    return {res1, res2}
}
// console.log(aniqla(satr));

// 2.8 masala N natural soni va belgi berilgan. N ta kiritilgan belgidan iborat satr hosil qiling va
// ekranga chiqaring.Masalan: N = 5; Belgi: "A"; Natija = AAAAA

function repeatStr (n, str){
    let result1 = str.padStart(n, str)
    let result2 = str.repeat(n)

    return result1;
}
// console.log(repeatStr(5, 'A'));




// 2.9 masala Ikkita satr berilgan shu satrlar ketma ketligidan iborat yangi satr hosil qiling ekranga chiqaring.

function repeatStrTwo(str1, str2){
    let result = str1.concat(' ', str2)
    return result
}
// console.log(repeatStrTwo('hello', 'world'));

// 2.10 masala  Kiritilgan satr teskari tartibda chiqaruvchi programma tuzilsin.

// let str = prompt('str kiriting: ');

function repeatStrThree(str) {
    let result = '';
    for(let i = str.length - 1; i >= 0; i--){
        result += str.split('')[i];
    }
    return result;
}
// console.log(repeatStrThree(str));

// 2.11 masala

function probel(){
    let text = 'ayubxon'
    const myArray = text.split('');
    text = "";
    for (let i = 0; i < myArray.length; i++) {
    text += myArray[i] + ' ' 
}
return text
}
// console.log(probel());

// 2.12 masala


function repeatnumber(){
let number = 5
let text = "ayubxon";
const myArr = text.split("");
text = " ";
for (let i = 0; i < myArr.length; i++) {
  text += myArr[i] + '*'.repeat(number) 
}
return text
}
// console.log(repeatnumber());

// 2.13 masala

// let str = prompt('Lyuboy satr kiriting ichida raqamlardan foydalaning :')

  function countNumber (str){
    const arr = String(str).split('');
    let n = arr.length;
    let count = 0;
    for(let i = 0; i < n; i++){
      if(!isNaN(parseInt(arr[i]))){
        count += 1
      }
    }
    return count
  }

//   console.log(countNumber(str))

// 2.14 masala

let st = 'AbCdEE'

function countNumber(st) {
    const arr = st.split("");
    let count = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        if(/[A-Z]/.test(arr[i])){
            count += 1;
        }
    }
    return count;
}
// console.log(countNumber(st))


function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // N-element Fibonacci ketma-ketligini chiqarish
  function fibonacciSequence(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
      sequence.push(fibonacci(i));
    }
    return sequence;
  }
  
  // Test qilish
//   console.log(fibonacciSequence(6)); // Birinchi 10 Fibonacci sonlari
  

//   let y = 6 + "5";

//   console.log(y);



// console.log( 0.2 + 0.7 === 0.9);


                // O'zgaruvchilar 
// O'zgaruvchilar, dasturda malumotlarni saqlash va ularga murojaat qilish
// uchun ishlatiladi.
// Ularni elon qilish uchun "var", "let", "const" kalit so'zlaridan
// birini ishlatamiz


// O'zgaruvchi e'lon qilish
var x = 5;
let y = 10;
const  PI = 3.14;

// O'zgaruvchi qiymatini o'zgartirish
x = 7;
y = 15;
// PI = 3.14159  // Xatolik const o'zgarmas o'zgaruvchi

// O'zgaruvchilardan foydalanish
console.log(x); // 7
console.log(y); // 15
console.log(PI); // 3.14

// O'zgaruvchilar bilan hisoblash
let z = x + y;
console.log(z); // 22

// Matn o'zgaruvchisi
let name = "John";
console.log("salom, " + name + "!"); // Salom, John!

// Massiv o'zgaruvchisi
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1

// Obyekt o'zgaruvchisi
let person = {
    name: "John",
    age: 30,
    gender: "male"
};
console.log(person.gender);// 30 

// massiv o'zgaruvchilar
let raqam = [1, 2, 3, 4, 5, 6]
console.log(raqam[5]);

// obyekt o'zgaruvchilar
let pupil = {
    name: 'ayubxon',
    age: 23,
    job: 'web developer'
}
console.log(pupil.age);

                    // Function

    // Funksiya tuzish. 
// Funksiya "function" kalit so'zi bilan boshlanadi va
// bitta yoki bir nechta parametrlarni qabul qilishi mumkin.Undan so'ng
// qavs ochiladi va funksiya ichidagi kodlar yoziladi.
// Misol uchun:

    function salom () {
        console.log('Salom, dunyo!');
    }
    salom(); // Salom, dunyo!

    //Parametrlar va qaytadigan qiymatlar:
// Funksiyalar parametrlarni qabul qilishi va qaytadigan qiymatlarni
// olib qaytarishi mumkin.
// Misol uchun:
    // Decloration function
   function hisobla (son1, son2) {
    return son1 + son2
   }
   let result = hisobla(5, 5);
   console.log(result); // 10

   // Anonim funksiyalar: Expression function
// Anonim funksiyalar nomi yo'q funksiyalardir va ular o'zgaruvchilarda saqlanadi.

let hello = function(){
    console.log('hello world');
}
hello()
// Expression function parametr sifatida:

let hellow = function(name){
    console.log('Salom, ' + name + '!' );
}
hellow("John") // Salom, John!

    // Obyekt sifatida funksiyalar:
// Javascriptda funksiyalar obyekt sifatida yaratilishi mumkin.
// Misol uchun:

let uzunlik = function(a, b) {
    return Math.sqrt(a * a + b * b);
  };
  
  let kvadratUzunlik = uzunlik;
  let kvadratNatija = kvadratUzunlik(3, 4);
  console.log(kvadratNatija);

  // !!! bu joyda "Math.sqrt" uzunlikni kvadrat ildizini qaytaradi.

    // Funksiyalarning o'z ichiga funksiyalar qabul qilish va qaytarish:
// JavaScript funksiyalarni o'z ichiga funksiyalarni qabul qilish va 
// qaytarish imkonini beradi.
// Bu qo'llanma funksiyalarning ko'p tomonlama qo'llanishiga imkon beradi.
// Misol uchun :

function engKatta(sonlar){
    return function(a, b){
        let n1 = a % sonlar;
        let n2 = b % sonlar;
        return (n1 < n2) ? a : b;
    }
}
let engKatta5 = engKatta(5);
console.log(engKatta5(13, 23)); // 23

// Errow function

let hisoblang = (a, b) => {
    return a + b
}
console.log(hisoblang(5 , 5)); // 10

// !!! Funksiyalar Javascriptda amaliy ish qilishning asosiy qismidir.
// Ular kodni taqsimlash imkonini beradi.


let myFunction = (a, b) => {
    return a * b
}
console.log(myFunction(5, 6));// 30

function toCelsius (f){
    return (9-5) * (f-32)
}
let resultt = `bu bog'cha ${toCelsius(33)} boshqa bog'cha`;
console.log(resultt); // bu bog'cha 4 boshqa bog'cha

hollo = po =>  'hello world ' + po
console.log(hollo("do'st"));

console.log(myfunc());

function myfunc () {
    return 'hello garry'
}
