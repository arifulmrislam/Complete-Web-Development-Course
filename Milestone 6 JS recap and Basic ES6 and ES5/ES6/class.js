class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('He is a good teacher');
    }
}

const tejgaon_school = new Teacher('Tapon', 'Math');
console.log(tejgaon_school);
tejgaon_school.lecture();