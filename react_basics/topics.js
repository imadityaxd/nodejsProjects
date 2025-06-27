// var num = 2+2;
// console.log(num);

// let name = ["Aditya","Yash","Shubh"];
// let name2= [...name];
// console.log(name2);

// let students = {
//     id: 101,
//     subject: "Maths",
//     names: "Viraj"
// }

// console.log(students.id);

// //the primitive data type values are immutable because they can't be changed but only be reassigned.  

// let num2 = 5;
// let num3 = num2;
// num2  = 4; 
// console.log(num2);
// num3  = 6;

// console.log(num3);

//map function in javascript 

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num)=> num < 4)
// console.log(newNums);


const books = [
    {
        title:'Book One',
        genre:'Science',
        year:2001,
        author:'Aditya'
    },
    {
        title:'Book Two',
        genre:'Fiction',
        year:2011,
        author:'Aditya'
    },
    {
        title:'Book Three',
        genre:'History',
        year:2016,
        author:'Aditya'
    },
    {
        title:'Book Four',
        genre:'Science',
        year:2011,
        author:'Aditya'
    },
    {
        title:'Book Five',
        genre:'Fiction',
        year:2016,
        author:'Aditya'
    },
    {
        title:'Book Six',
        genre:'History',
        year:2001,
        author:'Aditya'
    },
    {
        title:'Book Seven',
        genre:'Science',
        year:2016,
        author:'Aditya'
    },
    {
        title:'Book Eight',
        genre:'Comedy',
        year:2018,
        author:'Aditya'
    },
    {
        title:'Book Nine',
        genre:'History',
        year:2001,
        author:'Aditya'
    },
    {
        title:'Book Ten',
        genre:'Science',
        year:2011,
        author:'Aditya'
    },
    {
        title:'Book Eleven',
        genre:'Fiction',
        year:2016,
        author:'Aditya'
    }
]

const newBooks = books.filter( (bk) => {
    return bk.genre === 'History'
})

const newBooks2 = books.filter( (bk) => bk.year === 2016)

console.log(newBooks2);

console.log(newBooks);