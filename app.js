//import modules && files
const students = require('./students')
const yargs =  require('yargs')
const { array } = require('yargs')

//Code commands
//add - read - list - delete

//Add command



yargs.command({
    command: 'add',
    describe: 'add student',
    builder: {
        id: {
            describe: 'student id',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'student name',
            demandOption: true,
            type: 'string'
        },
        grads: {
            describe: 'student grads',
            demandOption: true,
            array: true
        },
        sumation: {
            describe: 'student sum',
            type: 'number'
        }

    },
    handler: (argv) => {
        // console.log('New student added')
        students.addStudent(argv.id, argv.name, argv.grads, argv.totalGrads, argv.gpa)

    }
})
//read command
yargs.command({
    command: 'read',
    describe: 'Read a student',
    builder: {
        id: {
            describe: 'student id',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        // console.log('reading student')
        students.readStudent(argv.id)
        // notes.readStudent(argv.id)
    }
})
//list command
yargs.command({
    command: 'list',
    describe: 'list of students',
    handler: (argv) => {
        // console.log('Student list')
        students.listStudents(argv.name)
    }
})
//delete command
yargs.command({
    command: 'delete',
    describe: 'delete student',
    builder: {
        id: {
            describe: 'student id',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        // console.log('student deleted')
        students.deleteStudent(argv.id)
    }
})
// yargs.parse()
console.log(yargs.argv)