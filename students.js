//import modules && files
const fs = require('fs');

//Function`s logic

//add Student function
const addStudent = (id, name, grads, sumation) => {
    const students = loadStudents();
    
    const duplicateId = students.filter((student) => {
        return student.id === id;
    });
    console.log(duplicateId)
    console.log(duplicateId.length)
    if(duplicateId.length === 0) {
        const array = grads;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }    
        // console.log(sum);
        let perc = (sum/400)*100
        let gpa;
        if(perc <= 100 && perc >=85) {
            gpa = 'Gpa is: A'
        }else if(perc <= 85 && perc >= 75) {
            gpa = 'Gpa is:  B'
        }
        else if(perc <= 75 && perc >= 65) {
            gpa = 'Gpa is: c'
        }
        else  {
            gpa = 'Gpa is: f'
        }
        students.push({
            id,
            name,
            grads,
            totalGrads: sum,
            comment:  gpa
        })
        saveStudent(students)
        console.log('Hint: students have 4 subjects in this simester, Total grads is equal to 400 ')

        console.log('Student added successfully')
    } else {
        console.log('this id in use, use another one!')
    }




    // const duplicateId = Object.values(students).find((student) =>{
    //     student.id === id
    // })

    // if(!duplicateId) {
    //     students.push({
    //         id,
    //         name

    //     })

    //     saveStudent(students)
    //         console.log('Student added successfully')
    //     } else {
    //         console.log('this id in use, use another one!')
    //     }
}

//load Students function
const loadStudents = () => {
    try {
        const dataBuffer = fs.readFileSync("students.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }

}
//Save Students function
const saveStudent = (students) => {
    const saveData = JSON.stringify(students)
    fs.writeFileSync("students.json", saveData)
}

//delete Student function
const deleteStudent = (id) => {
    const students = loadStudents()
    const studentsToKeep = students.filter((student) => {
        return student.id !== id 
    })
    // console.log(students)
    // console.log(notesToKeep)
    // saveStudent(notesToKeep)
    // console.log('This student removed')
    if (students.length > studentsToKeep.length) {
        console.log('Student removed!')
        saveStudent(studentsToKeep)
    } else {
        console.log('No student found!')
    } 
}

//read Students function
const readStudent = (id) => {
    const students = loadStudents()

    const student = students.find((student) => {
        return student.id === id
    })
    // console.log(student)
    if(student) {
        console.log('Student id: ' + student.id, 'Student name: ' + student.name + ' Grads: ' + student.grads + ' Total: ' + student.comment)
    }else {
        console.log('Sorry this student does not exist!')
    }
}


//list Students function
const listStudents = () => {
    const students = loadStudents()
    students.forEach((student) => {
        console.log('Student name: ' + student.name, 'totalGrads: ' + student.totalGrads, 'GPA: ' + student.comment) 
    })
}

module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listStudents
}