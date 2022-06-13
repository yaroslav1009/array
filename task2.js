let button1 = document.querySelector('#task2');
button1.onclick = function() {
    let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    console.log('Додатні елементи і їх сума')
    let numplus = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i] <0) continue
        console.log(arr[i])
        numplus += arr[i]
    }
    console.log("Сума додтніх чисел: " + numplus)
    let min = Math.min(...arr);
    let min1 = arr.findIndex(index => index === min);
    console.log("Минимаьное значение в массиве = " + min + " Его индекс = " +  min1 )
    let max = Math.max(...arr);
    let max1 = arr.findIndex(index => index === max);
    console.log("Максимальное значение в массиве = " + max + " Его индекс = " +  max1 )
    for(let i = 0; i<arr.length; i++){
        if(arr[i] >0) continue
        console.log(arr[i])
        numplus += arr[i]
    }
    console.log("Количество непарных положительных элементов")
    for(let i = 0; i<arr.length; i++){
        if((arr[i]%2 ===0) || (arr[i]<0)) continue
        console.log(arr[i])
    }
    for(let i = 0; i<arr.length; i++){
        if((arr[i]%2 !==0) || (arr[i]<0)) continue
        numplus += arr[i]
    }
    console.log("Сумма парных положительных элементов " + numplus)
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<0) continue
        numplus *= arr[i]
        console.log(arr[i])
    }
    console.log("Произвидение положительных элементов " + numplus)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
        if (arr[i] !== max) {
          arr[i] = 0;
        }
      }
      console.log(arr);
}