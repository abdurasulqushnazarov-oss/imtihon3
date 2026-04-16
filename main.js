//1-masala

// let num = +prompt("son kiriting");
// if (num % 2 === 1) {
//   console.log("toq  son");
// } else {
//   console.log("juft son");
// }

//============================================================

//2-masala

// let num1 = +prompt("uch xonali son kiriting");
// let yuzlik = Math.floor(num1 / 100);
// let onlik = Math.floor(num1 / 10) % 10;
// let birlik = num1 % 10;

// if (yuzlik > onlik && yuzlik > birlik) {
//   console.log(yuzlik);
// } else if (onlik > yuzlik && onlik > birlik) {
//   console.log(onlik);
// } else {
//   console.log(birlik);
// }

//========================================================================

//3-masala

// let num = +prompt("son kiriting");
// if (num > 0) {
//   console.log("musbat");
// } else if (num === 0) {
//   console.log("nol");
// } else {
//   console.log("manfiy");
// }

//================================================================================

//4-masala

// let num = +prompt("uch xonali son kiriting");

// let birlik = num % 10;

// let onlik = Math.floor(num / 10) % 10;

// let yuzlik = Math.floor(num / 100) % 10;

// let str = " ";

// switch (yuzlik) {
//   case 1:
//     str += "biryuz ";

//     break;

//   case 2:
//     str += "ikkiyuz ";

//     break;

//   case 3:
//     str += "uchyuz ";

//     break;
//   case 4:
//     str += "to'rtyuz ";

//     break;
//   case 5:
//     str += "beshyuz ";

//     break;
//   case 6:
//     str += "oltiyuz ";

//     break;
//   case 7:
//     str += "yettiyuz ";

//     break;
//   case 8:
//     str += "sakkizyuz ";

//     break;
//   case 9:
//     str += "to'qqizyuz ";
// }

// switch (onlik) {
//   case 1:
//     str += "o'n ";

//     break;

//   case 2:
//     str += "yigirma ";

//     break;

//   case 3:
//     str += "o'ttiz ";

//     break;
//   case 4:
//     str += "qirq ";

//     break;
//   case 5:
//     str += "ellik ";

//     break;
//   case 6:
//     str += "oltmish ";

//     break;
//   case 7:
//     str += "yetmish ";

//     break;
//   case 8:
//     str += "sakson ";

//     break;
//   case 9:
//     str += "to'qson ";
// }

// switch (birlik) {
//   case 1:
//     str += "bir ";

//     break;

//   case 2:
//     str += "ikki ";

//     break;

//   case 3:
//     str += "uch ";

//     break;
//   case 4:
//     str += "to'rt ";

//     break;
//   case 5:
//     str += "besh ";

//     break;
//   case 6:
//     str += "olti ";

//     break;
//   case 7:
//     str += "yetti ";

//     break;
//   case 8:
//     str += "sakkiz ";

//     break;
//   case 9:
//     str += "to'qqiz ";
// }

// console.log(str);

//=================================================================================================================

//5-masala

let yil = +prompt("yil kiriting");
if (yil % 4 === 0) {
  console.log("kabisa yili");
} else {
  console.log("Oddiy yil");
}
