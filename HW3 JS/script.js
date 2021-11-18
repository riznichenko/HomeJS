const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Иван',
        surname: 'Венгер',
        salary: 1600, 
        workExperience: 11, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    }
];

//1 задание

//1 задание 1 способ
const employeeObj = new Emploee(emplyeeArr[2]);
function Emploee(obj2) {
 for(let key in obj2) {
    this[key] = obj2[key];
 }
}
console.log(employeeObj);

//1 задание 2 способ
const employeeObj = new Emploee(emplyeeArr[2]);
function Emploee(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.surname = obj.surname;
    this.salary = obj.salary;
    this.workExperience = obj.workExperience;
    this.isPrivileges = obj.isPrivileges;
    this.gender = obj.gender;
};
console.log(employeeObj);

//2 задание
const employeeObj = new Emploee(emplyeeArr[2]);

//1 задание 3 способ 
function Emploee({id,name,surname,salary,workExperience,isPrivileges,gender}) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;

    function getFullName() {
        console.log(`${this.name} + ${this.surname}`);
    }
}
employeeObj.getFullName();

//3 задание
const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    }
];
const employeeObj = new Emploee(emplyeeArr[0]);
function Emploee(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
};
let createEmployesFromArr = (newArray) => { 
    let arr = [];
    for(let employee of newArray) {
        arr.push(new Emploee(employee));
    }
    return arr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr[0]);



//4 задание


const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    }
];
const employeeObj = new Emploee(emplyeeArr[0]);
function Emploee(employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
    
    this.allName1 = function() {
        return this.name;
    }

    this.allSalary = function () {
        return this.salary;
    }
};

let createEmployesFromArr = (newArray) => { 
    let arr = [];
    for(let employee of newArray) {
        arr.push(new Emploee(employee));
    }
    return arr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

// const getFullNamesFromArr = (arr2) => {
//     let fullName = [];
//     for(let i = 0; i < arr2.length; i++) {
//         let y = new Emploee(arr2[i]);
//         let fullN = y.allName1();
//         fullName.push(fullN);
//     }
//     return fullName;
// }
// getFullNamesFromArr(emplyeeConstructArr)

//5 задание

const getMiddleSalary = (arr) => {
    ... Your code
}

getMiddleSalary(emplyeeConstructArr) /// 1560



const getMiddleSalary = (arr3) => {
    let allSalary1 = [];
    for(let i = 0; i < arr3.length; i++) {
        let y = new Emploee(arr3[i]);
        let fullN = y.allSalary();
        allSalary1.push(fullN);
    }
    return allSalary1;
}

getMiddleSalary(emplyeeConstructArr) /// 1560

