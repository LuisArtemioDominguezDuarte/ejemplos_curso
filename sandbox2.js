alert('hola mundo');
console.log('parte1');
console.log(1);//quiero que la consola imprima 1
console.log(2);
console.log('parte2');
let año =25;
let años= 2020;
console.log(año);//la consola va a leer el año
console.log(años);//la consola va a leer los años 
console.log(año,años);//la consola lee ambos

const puntos = 100;

var record =75;

console.log(puntos);
console.log(record);
//parte de valores

//strings
console.log('hola mundo');

let email = 'ArtySint_123@hotmail.com';
console.log(email);
//string concatenation
let primerNombre = 'Luis';
let apellido = 'Dominguez';
let nombreCompleto = primerNombre +' ' + apellido;
console.log(nombreCompleto);
//getting characters
console.log(nombreCompleto [3]);
//String length
console.log(nombreCompleto.length);
//String mothods
console.log(nombreCompleto.toUpperCase());
let resultado = nombreCompleto.toLocaleLowerCase( );
console.log(resultado, nombreCompleto);

let index= email.indexOf('@');
console.log(index);

//metodos de cadenas 
let correo = 'ArtySint_123@hotmail.com';

let result = correo.lastIndexOf('n');
let result2 = correo.slice(0,5);
let result3 = correo. substr(4,10);
let result4 = correo.replace('@', 'arroba')
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

//numeros 

let radio = 10;
const pi = 3.14;

console.log(radio, pi);
//operaciones matematicas +,-,/,*,**,%
console.log(10/2);
let resultado2 = radio % 3;
let resultado3 = pi *radio ** 2;
let resultado4 = 5 * (10-3)**2;

console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

let likes =10;

/*likes = likes +1;
likes++;
likes--;
likes +=10;
likes -=5;
likes *=2;
*/
likes /=2;

console.log(likes);

//NaN - not a number

console.log(5/'hola');
console.log(5*'hola');


let res = 'the blog has' + likes + 'likes';
console.log(res);

///cadenas 
const title= 'best reads of 2020';
const author ='juan';
const like = 30;

//concatenation way
let =rest = 'the blog called' + title + 'by' + author + 'has' + like + 'likes';
console.log(rest);
//template string way
let rest2 ='the blog called ${title} by ${author} has ${like} likes';
console.log(rest2);
// creating html templates

let html  =  `
<h2> ${title} </h2>
<p> Por ${author} </p>
<span> Este blog tiene ${like} likes </span>
` ;

console.log( html );

let lol = ['faker','fedez','Lol']
console.log(lol);
console.log(lol[1]);


let edades =[20,25,23,24];
console.log(edades[2]);

let alAzar = ['Luis', 2, 'Mario', 6]
console.log(alAzar[1]);
console.log(lol.length);
let re= lol.join('-');
console.log(re);
let rep= lol.indexOf('fedez');
console.log(rep);

//let reps = lol.concat(23,'pro',' y ya');
let reps = lol.push('y ya');
reps = lol.pop();
console.log(reps);

//nulos 
let ag = null;

console.log(ag,ag +3, 'the age is ${ag}');


//booleans 
console.log(true, false, "true", "false");


let mail = 'ArtySint_123@hotmail.com';
let name = ['mario', 'luis', 'alan'];
let resst = mail.includes('!');
let ress = name.includes('juan');

console.log(resst);
console.log(ress);

//comparacion 

let numero=25;
console.log(numero ==25);
console.log(numero ==30);
console.log(numero !=30);
console.log(numero > 20);
console.log(numero < 20);
console.log(numero <=25);

let  nombe =  'shaun' ;

console.log(nombe == 'shaun');
console.log(nombe == 'Shaun');
console.log(nombe > 'cristal');
console.log(nombe > 'Shaun');
console.log(nombe > 'Cristal');

// conversión de tipo
// let score = '100';

// puntaje = Número (puntaje);
// console.log (puntuación + 1);
// console.log (tipo de puntuación);

// let resultad = Number('hola');
// let resultad = String(50);
// let resultad = Boolean(100);
// let resultad = Boolean(0);
// let resultad = Boolean('0');
let resultad = Boolean('');

console.log(resultad,typeof resultad);
