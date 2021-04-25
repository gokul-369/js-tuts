const connection = () => {
    console.log(`Connecting to Database`);
}
const fetch = () => {
    console.log(`fetching records`);
    setTimeout(() => {
        console.log(`records displayed`);
    }, 3000);
}
const close = () => {
    console.log(`connection is closed`);
}

connection()
fetch() 
close()