
//! number, string,undefined,null,boolean,bigInt,symbol,object

//! any, never,unknown,enum,tuple

const firstName : string="Fidan";
const num :number = 21;


const isMarried : boolean= false

// let level:any;
// level = "first"
// level = 23;


let numArr: number [] = [3,4,6,7];
// numArr.push("Fidan")
// numArr[0]=90

// numArr.map(item=>item.toFixed(2))
// const fruits:string[]=["apple","banana","fig"];
// fruits.forEach((elem) => elem.toUpperCase());

let arr:[number,string] = [1,"Fidan"];
// arr [0]=6
// arr.push(5)
// console.log(arr);

//! ENUM--> PASCALCASE
// enum SizeEnum {
//     Small='s',
//     Medium='m',
//     Large='l'
// }
// const mySize:SizeEnum = SizeEnum.Small
// console.log(mySize);

//! OBJECT
// const obj:{readonly id: number,name?:string,sayHi:()=>void} = {
//      id:1,
//      sayHi:()=>{console.log("Hello");
//      }
// }
// obj.name = "Fidan"
// // obj.id = 5
// console.log(obj);

// type Employee={
//     id:number;
//     name:string;
//     hire:(date:Date)=>void
// }

// const employee:Employee = {
//     id:5,
//     name:"Fidan",
//     hire:(date)=>console.log("Welcome",date)
    
// }
//! VOID-Hecne return etmir

// function sum (a:string):number{
//     return Number(a) 
// }
// console.log(sum("ss"));

// function converToAzn (money:number,year=2020):number{
//     if(year<2020) return money *0.78;

//     return money *1.7
// }
// converToAzn (100)

//! UNION TYPE

// let surname: string | number = "Fidan"

type Draggable = {
    drag:()=>void
}

type Resizable = {
    resize :()=> void
}
type UIWidget = Draggable | Resizable

const textArea:UIWidget = {
    drag:()=>{},
    resize:()=>{}
}