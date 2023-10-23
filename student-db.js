const express = require('express');
const path = require('path');
const app = express();

const studentDb = [
    {id: '1', name: 'John', grade: 'A'},
    {id: '2', name: 'Lina', grade: 'B'},
    {id: '3', name: 'Steve', grade: 'C'},
];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('dirname', __dirname);

app.get('/students/:id', function(req, res) {
    const studentID = req.params.id;
    const student = studentDb.find(student => student.id === studentID);
    console.log(`The value for the :id route parameter is: ${req.params.id}`);
    res.render('student/show', {student});
});

app.listen(3456, () => {
    console.log(`Server is listening on port 3456`);
});



