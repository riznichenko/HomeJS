//1 задание

function counter (val) {
    let kol = val;
    counter = function (){
        let arg = arguments[0] ? arguments[0] : 0;
        return kol = kol + arg;
    };
    return counter();
    }
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));

//2 задание

function getUpdatedArr(val) {
    let arr = [];
    getUpdatedArr = function (){
        let arg = arguments[0] ? arguments[0] : null;
        arr[arr.length] = arg;
        if(!arg) arr = [];
        return arr;
    };
    return getUpdatedArr(val);
}
console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5)); 
console.log(getUpdatedArr({name: 'Vasya'}));
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));

//3 задание

function getTime() {
    let arr = [];
    getTime = function (){
        let now = Date.now();
        if(arr.length) {
            let lastTimeStart = (now - arr[arr.length - 1]) / 1000;
            console.log('Запускаем через ' + lastTimeStart + ' сек');
        } else {
            console.log('Enabled');
        }
        arr.push(Date.now());
    };
    getTime();
}