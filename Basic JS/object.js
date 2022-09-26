let student = {
    name: "karim",
    roll: 3,
    class: 5,
    section: "A"
};

student["name"] = 'abdullah';
student["address"]= 'mohsin hall'

console.log(student['class']);//we put quotation because class is a string and we have to put it as a string, this is js brackets notation
console.log(student.class)//dot notation

console.log(student);
