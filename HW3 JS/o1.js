////// 1 задание
const arr = ['Vasya', 'Petya', 'Alexey'];
function removeUser(arr, num) {
  arr.splice(num, 1);
}
removeUser(arr, 0);
console.log(arr);

////// 2 задание
const obj = { name: 'Vasya', age: 1};

const getAllKeys = (obj) => Object.keys(obj);
console.log(getAllKeys(obj));


////// 3 задание 
const obj = { name: 'Vasya', age: 1};

const getAllValues = (obj) => Object.values(obj);
console.log(getAllValues(obj));


////// 4 задание 
const obj = {
  id: 3,
  name: 'Vasya'
}

const secondObj = {
  id: 4,
  name: 'Katya'
}

const arr = [
  {
      id: 1,
      name: 'Kolya'
  },
  {
      id: 2,
      name: 'Petya'
  },
];

insertIntoarr(obj, 2)
console.log(arr) 
/// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

insertIntoarr(secondObj, 1)
console.log(arr) 
/// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
