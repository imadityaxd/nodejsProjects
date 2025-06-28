// // // var num = 2+2;
// // // console.log(num);

// // // let name = ["Aditya","Yash","Shubh"];
// // // let name2= [...name];
// // // console.log(name2);

// // // let students = {
// // //     id: 101,
// // //     subject: "Maths",
// // //     names: "Viraj"
// // // }

// // // console.log(students.id);

// // // //the primitive data type values are immutable because they can't be changed but only be reassigned.  

// // // let num2 = 5;
// // // let num3 = num2;
// // // num2  = 4; 
// // // console.log(num2);
// // // num3  = 6;

// // // console.log(num3);

// // //map function in javascript 

// // // const myNums = [1,2,3,4,5,6,7,8,9,10];

// // // const newNums = myNums.filter( (num)=> num < 4)
// // // console.log(newNums);


// // const books = [
// //     {
// //         title:'Book One',
// //         genre:'Science',
// //         year:2001,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Two',
// //         genre:'Fiction',
// //         year:2011,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Three',
// //         genre:'History',
// //         year:2016,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Four',
// //         genre:'Science',
// //         year:2011,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Five',
// //         genre:'Fiction',
// //         year:2016,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Six',
// //         genre:'History',
// //         year:2001,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Seven',
// //         genre:'Science',
// //         year:2016,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Eight',
// //         genre:'Comedy',
// //         year:2018,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Nine',
// //         genre:'History',
// //         year:2001,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Ten',
// //         genre:'Science',
// //         year:2011,
// //         author:'Aditya'
// //     },
// //     {
// //         title:'Book Eleven',
// //         genre:'Fiction',
// //         year:2016,
// //         author:'Aditya'
// //     }
// // ]

// // const newBooks = books.filter( (bk) => {
// //     return bk.genre === 'History'
// // })

// // const newBooks2 = books.filter( (bk) => bk.year === 2016)

// // console.log(newBooks2);

// // console.log(newBooks);

// //map function
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums
// .map( (num) => num > 3 && num*10)
// .map( (num) => num+2)

// const newNums2 = myNums.filter( (num) => {
//     return num >3 && num*10 
// })


// console.log(newNums)
// console.log(newNums2)

//.reduce() = reduce the elements of an array to a single value 

const prices = [5,30,10,25,15,20];

const total = prices.reduce(sum);
console.log(`${total.toFixed(2)}`);

function sum (accumulator, element){
    console.log(`${accumulator} and ${element} = ${accumulator + element}`);
    return accumulator + element;
}