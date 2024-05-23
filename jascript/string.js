// // JS Sting Methods


// let text = "Bnana , kiwi,alto ,mango";


// // String length


// let length = text.length;
// console.log(length);

// // Charecter At charAt() method

// let char = text.charAt(1);
// console.log(char);

// // javascript String charCodeAt()

// let chars = text.charCodeAt(1);
// console.log(chars);

// // javascript String at Method

// let str = text.at(3)
// console.log(str);

// // Property access []

// let prt = text[0];
// console.log(prt);

// // Extracting String parts

// // Js String slice()

// // let part = text.slice(7,11) 
// // let part = text.slice(2)  here parameter is positive 2 so the position is counted from starting
// // let part = text.slice(-2)  here parameter is negative 2 so the position is counted from end

// // console.log(part);

// // Javascript String substr()

// let part = text.substr(5)
// console.log(part);

// // Javascript concat()   concat() joins two or more strings

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat("", text2)
// console.log(text3);

// let t1 = "     hello   !  ";
// console.log(t1.trim());

// let t2 = "5"
// console.log(t2.padEnd(4,"x"));

// let t3 = "hello"
// console.log(t3.repeat(2));

// // converting string to array

// console.log(t3.split("e"));


// var str = "Apple , banana , Grapes , Kiwi"
// // console.log(str.slice(7,-8));
// // console.log(str.substring(1,-4)); substring donot acceot the negative indexes
// console.log(str.substr(3,5));

const fruits = ["banana","Orange","Apple","Mango"];

// console.log(fruits.splice(2,1,"huu"));
// console.log(fruits);

// Numeric sort

const num = [20,45,32,90,56]

// console.log(num.sort(function(a,b){return b-a})[0]);

// console.log(fruits.toReversed());

const str = "AbCDHJJDBM"
var newStr = "";

for (var i = str.length-1;i >= 0;i--){
    newStr += str[i]
}
console.log(newStr);

// console.log(str.split("").reverse().join(""));

let userDetails ={
    name:"Ajay",
    Age:32,
    Designation:"Software Developer",
    printDetails:function(){
        console.log(this);
    }
}
userDetails.printDetails();

let userDetails2={
    name:"Mohit",
    age:21,
    Designation:"software engineer",
}
userDetails.printDetails.call(userDetails2);    