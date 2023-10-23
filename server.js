const express = require('express');
const path = require('path'); // standard library

const studentsDb = require('./data/students-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('dirname', __dirname);

app.get('/students/:id', function(req, res) {
    const studentID = req.params.id;
    const students = studentsDb.getAll();
    const student = students.find((student) => student.id === studentID);
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('students/show', {student});
});

app.listen(3456, () => {
    console.log(`Server is listening on port 3456`);
});



