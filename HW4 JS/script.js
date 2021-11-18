const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

class Student {
    constructor (enrollee) {
        this.id = Student.id ;
        for (let key in enrollee) {
            this[key] = enrollee[key];
        }

        this.isSelfPayment = true; //true - контрактник, false - бюджетник
        if(this.ratingPoint >= 800) {
            this.isSelfPayment = false;
            Student.budget.push(this);
        }

        let min = Math.min(...Student.budget.map((item) => item.ratingPoint));
        var student = Student.budget.find((obj) => {
            return obj.ratingPoint === min;
        });

        if(this.ratingPoint > min || (this.ratingPoint == min && this.schoolPoint > Student.schoolPoint)) {
            this.isSelfPayment = true;
            student.isSelfPayment = false;
            Student.budget.splice(Student.budget.indexOf(student), 5);
            
            Student.budger.push(this);
            
        }

        Student.allInstances.push(this);
        Student.id++;
    }
    static get listOfStudents() {
        return Student.allInstances;
    }
}

Student.budget = [];
Student.allInstances  = [];
Student.id = 1;
for (let item of studentArr) {
let student = new Student(studentArr(item));
}
console.log(Student.listOfStudents);




/////2 задание

class CustomString {
    reverse (myString) {
        return[...myString].reverse().join("");
    };
    ucFirst (myString) {
        return myString.charAt(0).toUpperCase() + myString.slice(1);
    }
    ucWords (myString) {
        return myString.replace(/(^|\s)\S/g, function(up) {
            return up.toUpperCase()
        })
    }
};


const myString = new CustomString();
console.log(myString.reverse('qwerty')); //выведет 'ytrewq'
console.log(myString.ucFirst('qwerty')); //выведет 'Qwerty'
console.log(myString.ucWords('qwerty qwerty qwerty')); //выведет 'Qwerty Qwerty Qwerty



////3 задание

class Validator {
        checkIsEmail (values) { 
            
       var phoneFormat = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-zA-Z]{2,4}$/;
        if(values.match(phoneFormat)) {
                return true;
        } else {
            return false;
        }

        // checkIsDomain (values) {
        //     if(values) {

        //     }
        // }

    }
};   


var validator = new Validator();

console.log(validator.checkIsEmail('Wasya.pupkin@gSail.Eu')); // true
validator.checkIsDomain('google.com'); // true
validator.checkIsDate('30.11.2019'); // true
validator.checkIsPhone('+38 (066) 937-99-92'); // если код страны Украинский, то возвращаем true иначе false