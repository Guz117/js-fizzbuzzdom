const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const div = document.createElement('div');
    div.classList.add('box');
    div.append(i);
    container.append(div);
    if  (i % 3 == 0 && i % 5 == 0){
        div.classList.add('red');
    } else if (i % 5 == 0) {
        div.classList.add('yellow');
    } else if (i % 3 == 0) {
        div.classList.add('green');
    }
}