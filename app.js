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
