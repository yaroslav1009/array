let button = document.querySelector('#task1');
button.onclick = function() {
    let str = prompt("Введите числа через запятую");
    let arr = str.split(',');
    let arrnum = arr.sort((a,b) => a - b);
    console.log(arrnum);
    arrnum.splice(2,3);
    console.log(arrnum);
}