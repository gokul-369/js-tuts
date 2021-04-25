const connection = () => {
  return `Connecting to Database`;
};
const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve (`fetching records`);
        }, 3000);
    }
    )
};
const close = () => {
  return `connection is closed`;
};

var calls = async () => {
    var one = connection()
    console.log(one);
    var two = await fetch()
    console.log(two);
    var three = close()
    console.log(three);
}
    calls()
