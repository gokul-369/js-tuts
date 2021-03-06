// function rev(arr)
// {
//     for(var i=arr.length-1;i>=0;i--)
//     {
//         console.log(arr[i]);
//     }
// } 

// var arr=Array.from("ant");
// console.log(arr);
// rev(arr);
var arr=["hell", "yeah" ,"bruv", "amazin"];
console.log(arr.fill("filler",1,3));
console.log(arr.filter((arr)=> arr != "filler" ));
console.log(arr.slice(1,3));
arr.splice(2,1,"bru");
console.log(arr);






