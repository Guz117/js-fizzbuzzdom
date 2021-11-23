const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const div = document.createElement('div');
    div.classList.add('box');
    div.append(i);
    container.append(div);
    if  (i % 3 == 0 && i % 5 == 0){
        div.style.backgroundColor = '#f0466f';
        div.innerHTML = 'fizzbuzz';
    } else if (i % 5 == 0) {
        div.style.backgroundColor = '#ffd166';
        div.innerHTML = 'buzz';
    } else if (i % 3 == 0) {
        div.style.backgroundColor = '#0bd6a0';
        div.innerHTML = 'fizz';
    }
}

const body = document.querySelector('body');

body.style.backgroundColor = '#083b4c';
body.style.fontFamily = 'Roboto';

const title = document.querySelector('.title')
const hUno = document.createElement('h1');
title.append(hUno);
hUno.innerHTML = 'FizzBuzzDOM';

hUno.style.color = 'white';
hUno.style.margin = '0.7em 0';
hUno.style.textAlign = 'center';
hUno.style.fontSize = '5em';