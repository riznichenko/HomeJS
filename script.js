'use strict'
//задание 1
for (let i = 1; i < 11 ;i++) {
    if ((i % 3 == 0) && (i % 2 !=0)){
        console.log('FizBuz');
    } 
    else if ((i % 2 == 0) && (i % 3)) {
        console.log('Fiz');
    }
    else if (i % 2 != 0) {
        console.log('Buz');
    }
    else {
        console.log('FizBuz');
    }
}

//Задание 2
function fac(n){
    return( n < 2 ) ? 1 : fac( n - 1 ) * n;
}
console.log(fac(10));

//Задание 3
const sheetsInReamPaper = 500; 
const consumptionPerWeek = 1200; 
const weeksAmount = 8; 
let a = (weeksAmount*consumptionPerWeek)/ sheetsInReamPaper+1;
console.log(a.toFixed());

//Задание 4
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 311;
const porch = (roomNumber/roomsOnFloor) / (floors*roomsOnFloor);// этаж
const floor = roomNumber / (floors* roomsOnFloor); //подъезд
console.log(porch.toFixed() ,floor.toFixed());



//Задание 5
const medianNumber = 6;
let cristmasTree =(n, s) => { 
    let box = ''; 
    for (let i = 0; i < n; i += 1) { 
        box += '-'.repeat(n-i-1) + s.repeat(2*i+1) + '-'.repeat(n-i-1)+ "\n"; 
    } 
    return box; 
}; 
let box = cristmasTree(medianNumber, '#'); 
console.log(box);

