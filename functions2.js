 var a =  function (name,rollno)
{
    switch (name) {
        case "gokul": return(`${name} is number ${rollno} `);
        case "yokesh": return(`${name} is number ${rollno} `);
        case "yaeshwanth": return(`${name} is number ${rollno} `);
        case "shrevan": return(`${name} is number ${rollno} `);     
    
        default: return(`number invalid`);

     }
}
console.log(a("yokesh", 48));