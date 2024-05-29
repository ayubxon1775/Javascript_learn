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

        // Javascript shart operatorlari

// 1.shart operatorlari Javascriptda shartlar qurish va ularni tekshirish uchun ishlatiladi.
// bunday shartlar amalga oshirilganida, biror amal bajariladi.Bu kodni boshqa yo'lda
// o'zgartirishga imkon beradi.

// 1. If-else: Eng oddiy shart operatoridir.Agar berilgan shart bajarilganda "true" qaytarsa "if"
// blok ishga tushadi. Aks holda "else" bloki ishga tushadi.
// Misol:

let yosh = 18;
if(yosh >= 18) {
    console.log('siz yetasiz');
}else{
    console.log('siz hali yetmagansiz');
}

// 2.Nested if-else : Bir nechta if-else bloklarining birlashmasi. 
// Misol:

let yoshi = 20;
if (yoshi >= 20){

    if(yoshi < 20){
        console.log('siz ishlaysiz');
    } else {
        console.log('siz pensiyanersiz');
    }
}else {
    console.log('siz hali ishlash yoshida emassiz');
}

// 3.Switch-case : Bir nechta qiymatlarni tekshirish uchun ishlatiladi.Kodni oson va 
// oddiyroq qilish uchun ishlatiladi.
// Misol:
    let kun = 5;
    switch (kun) {
        case 1:
            console.log("Dushanba");
        break;
        case 2:
            console.log("Seshanba");
        break;
        case 3:
            console.log("Chorshanba");
        break;
        case 4:
            console.log("Payshanba");
        break;
        case 5:
            console.log("Juma");
        break
        default:
         console.log("Hafta kunlari"); // Juma
    }

// 4.Ternary operator (?): Ternary operatori shartni baho berish uchun ishlatiladi va 
// undan keyingi qismdan birini qaytaradi.
// Misol:
    let age = 20;
    let taqiq = (age >= 21) ? "Yettingiz" : "hali yetmadingiz";
    console.log(taqiq); // Yettingiz

// Shart operatorlari javaScriptda dasturlash jarayonida juda kuchli bolib shartlarni tekshirish
// va amallarni bajarish imkoniyatini beradi. Har bir operatorning o'zining afzalliklari
// va qonuniyatlari mavjud. Qo'llanish jarayonida, ulardan foydalanishni o'rganish juda muhimdir.

let hours = 11
if (hours < 10){
    console.log('hayrli tong');
}else if (hours < 20){
    console.log('hayrli kun');
}else{
    console.log("hayrli kech");
}


switch (0){
    case 0:
    case 6:
        day = 'dam olish kunlari';
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        day = "ish kunlari";     
        break

        default:
        day = "bayram kuni"
}
console.log(day);

let xx = "0";
switch (xx){
    case 0:
        text = "off";
    break
    case 1:
        text = "on";
    break
    default:
        text = "no value found"
}
            // Cikl operatorlar

// Cikl operatorlari dasturlashda biror amallarni bir necha marta takrorlash uchun ishlatiladi.
// JavaScriptda "for", "while", va do-while cikllar keng ishlatiladi.

        // "for" cikl
// "for" cikli boshlang'ich qiymat shart va qadam bilan bir necha marta takrorlanadi.
// shart bajarilguncha takrorlanadi va qadam beriladi.
// Kodning qisqa va oson bo'lishi uchun "for" cikl keng ishlatiladi.

// 1 dan 5 gacha bo'lgan sonlar ketma-ketligini chiqarish
for(let i = 0; i <= 5; i++){
    console.log(i); // 0 1 2 3 4 5 
};

    const cars = ["BMW", "Kia", "Toyoto", "GM"];

    let text1 = "";
    for (let i = 0; i < cars.length; i++){
        text1 += cars[i] + " "  ;
    }
    console.log(text1);

    let text5 = '';
    for (let i = 10; i < 15; i++){
        text5 += "The number is " + i + " " ;
    }
    console.log(text5);



        // "while" cikl
// "while" cikl faqatgina shart bajarilguncha takrorlanadi.
// Shart bajarilguncha har bir takrorlashda shartni tekshiradi, agar shart rost bo'lsa cikl davom etadi.

// 1 dan 5 gacha bo'lgan sonlar ketma-ketligini chiqarish

let i = 1;
while(i <= 5){
    console.log(i); // 1 2 3 4 5
    i++
}
        // do-while cikli
// "do-while" cikli "while" bilan o'xshash lekin farqi shuki shartni har bir takrorlashdan oldin emas 
// balki har bir  takrorlashdan keyin tekshiradi.
// shart rost bo'lmasa ham cikl bir marta bajariladi.
// Eng kam foydalaniladigan cikl operatori.

// 1 dan 5 gacha bo'lgan sonlar ketma-ketligini chiqarish.

let j = 5
do{
    console.log(j); // 5 6 7 8 9 10
    j++;
}while (j <= 10);


                 // Massivlar
// Massiv - bu bir nechta qiymatga ega bo'lishi mumkin bo'lgan maxsus o'zgaruvchi
// JavaScriptda massivlar, biror malumotlar to'plamini (matnlar, sonlar, obyektlar
// va boshqa massivlar) saqlash uchun ishlatiladi.
// Massivlar o'z ichiga bir nechta elementlarni oladi va ularga tartib beriladi.
// Har bir elementning indeksi, massivning boshidan boshlab 0 dan boshlanadi.
// Massivlar - bu ob'ektlarning maxsus turi. JavaScript-dagi operator typeofmassivlar uchun "ob'ekt" ni qaytaradi.
// Massiv bitta nom ostida ko'p qiymatlarni saqlashi mumkin va siz indeks raqamiga murojaat qilish orqali qiymatlarga kirishingiz mumkin.
// Massivlarni const kalit so'zi bilan e'lon qilish odatiy holdir 

// Massiv yaratish
let mevalar = ['olma', 'banan', 'uzum', 'anor'];

// Massivdagi bir elementga murojaat 
console.log(mevalar[0]); // 'olma'
console.log(mevalar[2]); // 'uzum'

// Massivdagi elementlarni o'zgartirish
mevalar[1] = 'behi';
console.log(mevalar); // ['olma', 'behi', 'uzum', 'anor']

// Massivning uzunligini aniqlash
console.log(mevalar.length); // 4

// Yangi element qo'shish
mevalar.push('nok');
console.log(mevalar);// ['olma', 'behi', 'uzum', 'anor', 'nok']

// Massivdan element olish va uni o'chirish
let olinganMeva = mevalar.pop();
console.log(olinganMeva); // 'nok';
console.log(mevalar); // ['olma', 'behi', 'uzum', 'anor']

const personn = {
    firstName:"ayubxon",
    lastName: "Axmatxonov",
    age: 24
}
console.log(personn.age);

const fruits = ['olma ', 'anor ', 'behi ', 'nok'];
let flen = fruits.length

text = ''
for(let i = 0; i < flen; i++){
    text+=  fruits[i]
}
console.log(text);

// Massivlar - raqamlangan indexlarga ega bo'lgan maxsus turdagi obyektlardir.
// Qachon massivdan Qachon Obyektdan foydalanish kerak
// Element nomlari satr(matn) bo'lishini hohlasangiz Obyektdan foydalanish zarur.
// Element nomlari raqam bo'lishini hohlasangiz Massivdan foydalanish zarur.

        // Massiv methodlar

// push() methodi massivni oxirigi yangi element qo'shadi va uzunligini qaytaradi.
const fruitsOne= ['olma ', 'anor ', 'behi ', 'nok'];
fruitsOne.push('lemon'); //['olma ', 'anor ', 'behi ', 'nok', 'lemon']
console.log(fruitsOne);

// toString() massivlarni vergul bilan ajratilgan Stringlarga aylantiradi.
const fruitsTwo = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsTwo.toString());//olma,behi,uzum,gilos

// at() massivdan indexlangan elementni qaytaradi.
const fruitsThere = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsThere.at(-2)); //uzum

// join() massivni stringga aylantiradi va ularni orasiga elementlar qo'shish imkonini ham beradi.
const fruitsFour = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsFour.join('.')); // olma.behi.uzum.gilos

// pop() massivdan oxirgi elementni olib tashlaydi.
const fruitsFive = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsFive.pop());// gilos

// shift() massivning birinchi elementini olib tashlaydi va qolgan barcha elementlarni pastki indexga o'tkazadi.
const fruitsSix = ['olma', 'behi', 'uzum', 'gilos'];
fruitsSix.shift()
console.log(fruitsSix);// ['behi', 'uzum', 'gilos']

// unshift() massivning boshida yangi element qo'shadi va eski elementlarni uchirib tashlaydi.Unshift element uzunligini ham qaytaradi.
const fruitsSeven = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsSeven.unshift('Anor')); // 5

// concat() mavjud massivlarni birlashtirish orqali yangi massiv yaratadi.
const fruitsEight = ['olma', 'anor'];
const fruitsNine = ['uzum', 'gilos'];
console.log( fruitsEight.concat(fruitsNine)); //['olma', 'anor', 'uzum', 'gilos']

// !!!  mavjud massivlarni o'zgartirmaydi u har doim yangi massivni qaytaradi.
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"]; 
const myChildren = array1.concat(array2, array3);
console.log(myChildren);// ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']


const array4 = ["Cecilie", "Lone"];
console.log(array4.concat('ayubxon')); //['Cecilie', 'Lone', 'ayubxon']

// !!! concat() argument sifatida qatorlarni ham qabul qilishi mumkin.

// copyWithin() massiv elementlarini massivdagi boshqa joyga ko'chiradi.
const fruitsTeen = ['olma', 'behi', 'uzum', 'gilos','apelsin','mandarin'];
console.log(fruitsTeen.copyWithin(2,0)); //['olma', 'behi', 'olma', 'behi', 'uzum', 'gilos']


// copyWithin() mavjud qiymatlarni qayta yozadi.
// copyWithin() qatorga elementlar qo'shmaydi.
// copyWithin() massiv uzunligini o'zgartirmaydi

// flat() malum bir chuqurlikka birlashtirilgan pastki qator elementlari bilan yangi massiv yaratadi.

const myNumber = [[1,2],[3,4],[5,6]];
console.log(myNumber.flat());// [1, 2, 3, 4, 5, 6]

// Splice() massivga yangi elementlar qo'shish uchun ishlatiladi.
const fruitsEleven = ['olma', 'behi', 'uzum', 'gilos'];
fruitsEleven.splice(2,2, 'nok', 'anor');
console.log(fruitsEleven);// ['olma', 'behi', 'nok', 'anor']

// !!! Splice() yordamida massivdan elementlarni teshiklar qoldirmasdan olib tashlash mumkin.

const fruitstwelve = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitstwelve.splice(0,1));// ['olma']


// Yangi toSpliced() usuli eski splice() usuli o'rtasidagi farq shundaki, yangi usul asl massivni o'zgarmagan holda yangi massiv yaratadi.
// eski usul esa asl massivni o'zgartirdi.
const fruitsThirteen = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsThirteen.toSpliced(0,1));// ['behi', 'uzum', 'gilos']

// slice() massivning bir qismini yangi massivga ajratadi.

const fruitsFourteen = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsFourteen.slice(1,3));// ['behi', 'uzum']

// !!! slice() yangi massivni yaratadi.
// !!! slice() massivdan hech qanday elementni olib tashlamaydi

// indexOf() massivda element qiymatini qidiradi va uning o'rnini qaytaradi.

const fruitsFiveteen = ['olma', 'behi', 'uzum', 'gilos'];
console.log(fruitsFiveteen.indexOf("gilos")); // 1

// lastIndexOf()  indexOf bilan bir hil boladi, lekin belgilangan elementning oxirgi paydo bolish o'rnini qaytaradi.
const fruitsSixteen = ['olma', 'behi', 'uzum', 'gilos','behi'];
console.log(fruitsSixteen.lastIndexOf('behi')); // 4

//includes() bu massivda elementlarni bor yoki yoqligini tekshirish imkonini beradi, (indexOf dan farqli o'laroq NaN ham kiradi.)
const fruitsSeventeen = ['olma', 'behi', 'uzum', 'gilos','behi'];
console.log(fruitsSeventeen.includes('behi')); // true

// find() usuli sinov funksiyadan o'tgan birinchi massiv elementining qiymatini qaytaradi.

const numberss = [4, 9, 16, 25, 29];
let firsts = numberss.find(myfunc18);

console.log(firsts); // 25

function myfunc18(value,index,array) {
    return value > 18;
}

// findIndex() usuli sinov funksiyasidan o'tgan birinchi elementning index raqamini qaytaradi.

const numbersOne = [4, 9, 16, 25, 29];
let firstOne = numbersOne.findIndex(myfuncOne)

console.log(firstOne); // 2

function myfuncOne(value, index, array) {
    return value > 15;
}

// findLast() usuli u massiv oxiridan boshlanadi va shartni qondiradigan birinchi elementni qaytaradi
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast( x=> x > 40);
console.log(high); // 42 

// findLastIndex() usuli shartni qanoatlantiradigan oxirgi elementni topadi.
const tempOne = [27, 28, 30, 40, 42, 35, 30];
let highOne = tempOne.findLastIndex(x => x > 38);
console.log(highOne);//4

// sort() - massivni alifbo tartibida tartiblaydi.
const tempTwo = [27, 28, 30, 40, 42, 35, 30];
console.log(tempTwo.sort()); // [27, 28, 30, 30, 35, 40, 42]

// reverse() massivdagi elementlarni teskari aylantiradi.
const tempThree = [27, 28, 30, 40, 42, 35, 30];
console.log(tempThree.reverse());// [30, 35, 42, 40, 30, 28, 27]

// sort() va reverse() ni birlashtirish orqali siz massivni kamayish tartibida saralashingiz mumkin.
const tempFour = [27, 28, 30, 40, 42, 35, 30];
console.log(tempFour.sort().reverse());// [42, 40, 35, 30, 30, 28, 27]

// toSorted() asl massivni o'zgartirmasdan massivni saralashni havfsiz usuli sifatida usulni qo'shdi.
const tempFive = [27, 28, 30, 40, 42, 35, 30];
console.log(tempFive.toSorted());// [27, 28, 30, 30, 35, 40, 42]
// !!! toSorted() va sort() o'rtasidagi farq shundaki, birinchi usul asl massivni o'zgarmagan holda yangi massiv yaratadi,
// oxirgi usul asl massivni o'zgartiradi.

// toReversed() asl massivni o'zgartirmasdan massivni teskari aylantirish havfsiz usuli sifatida usulni qo'shdi.
const tempSix = [27, 28, 30, 40, 42, 35, 30];
console.log(tempSix.toReversed()); //[30, 35, 42, 40, 30, 28, 27]
// !!! toReversed() va reversed() o'rtasidagi farq shundaki, birinchi usul asl massivni o'zgarmagan holda yangi massiv yaratadi.
// oxirgi usul asl massivni o'zgartiradi.


// sort() metodi stringlar uchun odatiy usulda ishlaveradi misol uchun banan olma dan oldin keladi.
// Lekin numberlar uchun u boshqacha ishlaydi yani avval boshida 1 raqami ishtirok etgan sonlarni tartibi bo'yicha ishlaydi keyin qolganlarini chiqaradi 
// yani  [1, 4, 5, 11, 12,] shu holatda bo'lsa sort() metodi bu massivni bu ko'rinishda [1, 11, 12, 4, 5] saqlaydi albatta bu hato
// bu masalani hal qilish uchun esa quyida funksiya ko'rinishadi yechiladi.
const tempSeven = [1, 4, 5, 11, 12,];
console.log(tempSeven.sort());// [1, 11, 12, 4, 5]

tempSeven.sort(function (a, b) {
    return b-a
})
console.log(tempSeven);// [1, 4, 5, 11, 12]
// Agar tartibni teskari usulda qilmoqchi bo'lsangiz ( b - a ) ga aylantirish kifoya shunda qiymat [12, 11, 5, 4, 1] holatiga aylanadi.

// misol
const tempEight = [40, 100, 1, 5, 25, 10];
console.log(tempEight.sort()); // [1, 10, 100, 25, 40, 5]

const tempNine = [40, 100, 1, 5, 25, 10];
tempNine.sort(function(a, b){
    return a-b
})
console.log(tempNine); // [1, 5, 10, 25, 40, 100]

// Fisher Yates usulida tartiblash
const tempTeen = [40, 100, 1, 5, 25, 10];
function randomSort() {
    for(let i = tempTeen.length-1; i > 0; i-- ){
        let j = Math.floor(Math.random() * (i+1));
        let k = tempTeen[i];
        tempTeen[i] = tempTeen[j];
        tempTeen[j] = k;
    }
    console.log(tempTeen);// har hil chiqadi .[1, 10, 5, 100, 40, 25]

}
randomSort()

// Massivni tasodifiy usulda tartiblash
const tempEleven = [40, 100, 1, 5, 25, 10];
function randomSortOne(){
     tempEleven.sort(function() {
       return 0.5 - Math.random() 
    })
    console.log(tempEleven);// har hil chiqadi [10, 40, 5, 1, 25, 100]
}
randomSortOne()

// Massivning eng past qiymatini toping
const tempTwelve = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
tempTwelve.sort(function(a, b){
    return a - b
})
console.log(tempTwelve[0]);// 4

// Massivning eng yuqori qiymatini toping

const tempThirteen = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
tempTwelve.sort(function(a, b){
    return b - a
})
console.log(tempTwelve[0]);// 100


// Math.min.apply() Massivning eng past qiymatini topadi
// Math.max.apply() Massivning eng yuqori qiymatini topadi

const tempFourteen = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
function myArrMin(arr){
    return Math.min.apply(null, arr)
}
console.log(myArrMin(tempFourteen)); // 4

const carsOne = [
    {
        type: 'MBW',
        year: '2010'
    },
    {
        type: 'GM',
        year: '2015'
    },
    {
        type: 'Volvo',
        year: '2001'
    },
   
]

carsOne.sort(function(a , b){
    return a.year - b.year
}) 

console.log(carsOne[0]); // {type: 'Volvo', year: '2001'}


// forEach() har bir massiv elementi uchun bir marta funksiyani (qayta qo'ng'iroq funksiyasi) chaqiradi.


const tempFiveteen = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
let text12 = "";

tempFiveteen.forEach(myfuncTwo)
console.log(text12);//4010045251035284385

function myfuncTwo(value){
    text12 +=value
}

const tempSixteen = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
const tempEightteen = tempSixteen.map(myfuncThree);
console.log(tempEightteen);// [80, 200, 8, 10, 50, 20, 70, 56, 86, 170]
function myfuncThree(value){
    return value * 2
}

// filter() sinovdan o'tgan massiv elementlari bilan yangi massiv yaratadi.
const tempSeventeen = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
const oven = tempSeventeen.filter(myfuncFour);
const oven1 = oven.sort(mypunc)
console.log(oven1); // [25, 28, 35, 40, 43, 85, 100]


    function myfuncFour(value, index, array) {
        return value > 18
    }
    function mypunc(a, b) {
        return a - b
    }

// reduce() har bir massiv elementida bitta qiymat hosil qilish uchun (kamaytirish) funksiyani ishga tushiradi.
// reduce() chapdan o'ngga ishlaydi.
const tempNineteen = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
let sum = tempNineteen.reduce(mypuncOne);
console.log(sum); // 375
function mypuncOne(total, value) {
    return total + value
}

// reduce() usuli boshlang'ich qiymatni qabul qilishi mumkin.
const tempTwenty = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
let sumOne = tempTwenty.reduce(puncTwo, 10);
console.log(sumOne);// 385

function puncTwo(total, value, index, array ) {
    return total + value
};

const tempTwentyOne = [40, 100, 4, 5, 25, 10, 35, 28 , 43, 85];
let allOver18 = tempTwentyOne.every(puncThree);
console.log(allOver18); // false

function puncThree(  value, index, array) {
    return value > 18
}
