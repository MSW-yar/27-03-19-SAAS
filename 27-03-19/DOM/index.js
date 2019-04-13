// let y = document.getElementById ('pappo').innerHTML = 'chamar';
// let x = document.getElementsByTagName('div');
// console.log(x);
// x[1].innerHTML = 'PEHLA';
let x = document.getElementsByTagName('body')[0];
let z = document.createElement('p');
x.appendChild(z);
console.log(x);
let u = document.createTextNode('babuhiajj')
z.appendChild(u);
x.appendChild(z);

