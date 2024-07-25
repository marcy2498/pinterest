class Student {
    constructor(name, lastName, age,) {
      this.name = name;
      this.lastName = lastName;
      this.age = age;
    }
  }

  const estudiante = new Student('Marcela', 'Lopez',25 );
  console.log(estudiante)





  const allStudents = []

  const saveBtn = document.querySelector('#save-btn')
  const newStudentForm = document.querySelector('form')
  const nameInput = document.querySelector('#name')
  const lastNameInput = document.querySelector('#last-name')
  const ageInput = document.querySelector('#age')

  function onSave(e) {
    e.preventDefault();
    let firstName = nameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    // console.log(`firstName: ${firstName}, lastName: ${lastName}, age: ${age}`);
    const newStudent = new Student(firstName, lastName, age)
    console.log(newStudent)
    allStudents.push(newStudent);
    console.log(allStudents);

    renderStudentsTable()

    nameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
  }

  function renderStudentsTable() {
    document.querySelector('#students-table').innerHTML = '';
    for (let i = 0; i < allStudents.length; i++) {
      const row = document.createElement('div');
      row.setAttribute('class', 'student-row');
      const innerHtml = `
        <div>${allStudents[i].name}</div>
        <div>${allStudents[i].lastName}</div>
        <div>${allStudents[i].age}</div>
      `
      row.innerHTML = innerHtml
      document.querySelector('#students-table').appendChild(row);
    }
  }





  guardarAlumno.addEventListener('clik' ,agregarnuevoalumno)
  newStudentForm.addEventListener('submit', onSave);
