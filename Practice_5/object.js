let book ={
    title: "Harry Potter",
    author: "James",
    pages: 2098,
    readBook: function(){
        console.log("The book is being read.")
    }
}
function displayBookInfo(){    
    console.log("-----Information of Book -----"+
                "\nTitle: ", book.title + 
                "\nAuthor: ", book.author +
                "\nPage: ", book.pages);
}
function displayBookFunction(){
    book.readBook();
}

function displayStudentInfo(){
    let student = {
        name: "Audrey Jame",
        age: 23,
        grades: [6, 9, 5],
        calculateAverageGrade: function(){
            var n = this.grades.length;
            let sum = 0;
            for (let i = 0; i < n; i++) {
                sum += this.grades[i];
            }
            return n === 0 ? 0 : sum / n;
        }
    }
    console.log("-----Information of Student -----"+
                "\nName: ", student.name + 
                "\nAge: ", student.age +
                "\nGrades: ", student.grades+
                "\nAverge Grade: ", student.calculateAverageGrade());
}