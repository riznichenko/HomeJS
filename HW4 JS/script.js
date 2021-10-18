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
//1 задание
function Emploee(al){
    this.id = al.id;        
    this.name = al.name;        
    this.surname = al.surname;        
    this.salary = al.salary;         
    this.workExperience = al.workExperience; /// стаж работы (1 = один месяц)        
    this.isPrivileges = al.isPrivileges; /// льготы        
    this.gender = al.gender;
    
    //2 задание
    this.getFullName = function () {
        console.log(`${this.surname} ${this.name}`);
    };
}
let employeeObj = new Emploee(emplyeeArr[1]);
employeeObj.getFullName();
