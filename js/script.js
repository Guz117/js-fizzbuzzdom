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