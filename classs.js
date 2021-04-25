//to make a method or attribute private use a # before name of attribute and method

class student {
    constructor(name, rno) {
        this.name = name
        this.rno = rno
    }
    courseList = []
    
    enrollCourse(...crs) {
        for (const c of crs) {
             this.courseList.push(c);
        }
    }

    getinfo() {
        console.log(`
        The name of student is ${this.name} and his rollno is ${this.rno} and he has enrolled in ${this.courseList.length} courses and they are ${this.courseList}
        `
        )
    }
    loggedin(){
    console.log(`${this.name} has logged in`);
    }
}
class professors extends student{
    constructor(name)
    {
        super(name)
    }
}
var pro1 = new professors("Shankar")
pro1.loggedin()
var stu1 = new student("gokul", 3)
stu1.enrollCourse(["js", "c"])
stu1.getinfo()
stu1.loggedin()

module.exports=student