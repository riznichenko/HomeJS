////// 1 задание
// const arr = ['Vasya', 'Petya', 'Alexey'];
// function removeUser(arr, num) {
//   arr.splice(num, 1);
// }
// removeUser(arr, 0);
// console.log(arr);

////// 2 задание
// const obj = { name: 'Vasya', age: 1};

// const getAllKeys = (obj) => Object.keys(obj);
// console.log(getAllKeys(obj));


////// 3 задание 
// const obj = { name: 'Vasya', age: 1};

// const getAllValues = (obj) => Object.values(obj);
// console.log(getAllValues(obj));


////// 4 задание 
// const obj = { 
//     id: 3, 
//     name: 'Vasya' 
// } 
 
// const secondObj = { 
//     id: 4, 
//     name: 'Katya' 
// } 
 
// const arr = [ 
//     { 
//         id: 1, 
//         name: 'Kolya' 
//     }, 
//     { 
//         id: 2, 
//         name: 'Petya' 
//     }, 
// ]; 
// function insertIntoarr(ar, i){ 
//     let user = arr.find(item => item.id ==i ) 
  
 
// let person = arr.splice(arr.indexOf(user), 0, ar) 
// return arr 
// } 
 
// console.log(insertIntoarr(obj, 2))




///////5 задание

// class Condidate {
//     constructor (obj) {
//         for (let key in obj) {
//             this[key] = obj[key];
//         }
//     }
//     state () {
//         return this.address.split(',')[2];
//     }
// }
// const condidate = new Condidate(condidateArr[0]);
// condidate.state();



///////6 задание
// function getCompanyNames(){
//     const result = condidateArr.map(element => element.company);
//     const noDouble = new Set(result);
//     const back = [...noDouble];
//     console.log(back);
// }
// getCompanyNames();


///////7 задание
// function getUsersByYear(year) {
//     let arr = [];
//     condidateArr.forEach(element => {
//         if(element.registered.substr(0,4) == year){
//             arr.push(element._id);
//         }
//     });
//     return arr;
// }
// console.log(getUsersByYear(2017));




/////////8 задание
// function getCondidatesByUnreadMsg(count) {     
//     let filteredArray = condidateArr.filter(element => element.greeting.split(' ')[5] == count);     
//     return filteredArray; 
// }
// console.log(getCondidatesByUnreadMsg(8));

/////////9 задание 


// function getCondidatesByGender(gender) {     
//     let filteredArray = condidateArr.filter(element => element.gender == gender);     
//     return filteredArray; 
// }
// console.log(getCondidatesByGender('male')); 




//////// 10 задание

///////join
// const arr = ["Mark", "Ivan", "Rafael"];
// function joinFunc(arr, sep) {
//     var result = "";
//     var sep = ', ';
//     for (let i = 0; i < arr.length - 1; i++) {
//         result += arr[i];
//         result += sep;
//     }
//     result += arr[arr.length - 1];
//     return result;
// }
// console.log(joinFunc(arr))

