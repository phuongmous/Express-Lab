const students = [
    {id: '1', name: 'John', grade: 'A'},
    {id: '2', name: 'Lina', grade: 'B'},
    {id: '3', name: 'Steve', grade: 'C'},
];

module.exports = {
    getAll() {
        return students;
    }
}