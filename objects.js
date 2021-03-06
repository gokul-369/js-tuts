var Users = function (name, age)
{
    this.name = name;
    this.age = age;
    this.disp= function ()
    {
        console.log(`name is ${name} and age is ${age}`);
    }
}
var gokul =  new Users("gokul", 19);
gokul.disp();
var sam = new Users("sam", 20);
sam.disp();
