// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastname :"sigma",age: 20 ,batch : 1},
  { firstName: "Bình", lastname :"alpha", age: 22 ,batch : 2},
  { firstName: "Cẩm", lastname :"beta", age: 21 ,batch : 1},
  { firstName: "An", lastname :"gamma", age: 19 ,batch : 2}, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 * @param {string} lastname - the student's last name
 */
function updateStudentAge(firstName, newAge,lastname) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastname == lastname);
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("An", 30,"sigma");

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
