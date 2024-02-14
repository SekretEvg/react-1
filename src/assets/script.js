let a = {
    name: 'it-kama',
    protocol: 'https',
    maxStudentsCount: 10,
    isOnline: true,
    students: ['ivan', 'andrey', 'farid'],
    classroom: {
        teacher: {
            name: 'Wew',
            age: 18,
        },
    },
}

let b = {...a};
b.students = [...a.students];
b.classroom = {...a.classroom};
b.classroom.teacher = {...a.classroom.teacher};
// b.name = 'facebook';
// b.isOnline = false;
// b.students.push('Mary');
// b.classroom.teacher.name = 'DMITRY';
// b.classroom.teacher.age = 30;
// console.log(a);
// console.log(b);