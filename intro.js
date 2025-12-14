//fuction 

function yo(){
    let a=10, b=20;
    console.log(a+b);
}

yo();

//arrow function
const abc=()=>{

    console.log(10);
}

abc();

const hi=(x)=>{

    return x*x;
}

console.log(hi(10))

const kk=(x)=>x*x;

console.log(kk(20));


const fun= x => x*2;
console.log(fun(3));


//template literal

j=5

console.log(`Debarun ${j*j} `);  // or like java

console.log("hi",10, 40);

// if else and switch are same as java


const arr=[3, 20, 30, 40, 50];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

for(let i of arr){
    console.log(i);
}

arr.forEach(x=>{

    console.log(x);

})

// rest operator --- spreading
console.log(...arr);

function ap(a,b, ...c){
    console.log(a+b);
    console.log(...c)
}

ap(...arr)

// object
const person= {
    name: "Debarun",
    age: 17,
    class: 13
}

console.log(person.name);

//loop over object
for(let i in person){
    console.log(i, "=", person[i]);
}

const people=[
{
    name: "Debarun",
    age: 17,
    class: 13
},
{
    name: "Subhasis",
    age: 25,
    class: 21
},
{
    name: "xyz",
    age: 10,
    class: 5
}
]

//can be accessed using loops

//map

const na=arr.map((x)=> x*x)

console.log(na);

const abcd=people.map((x)=>{

    if (x.age>10) return x.name;
})

console.log(abcd);


const kkk=arr.map(x=>x*x).map(y=>{ if (y%2==0)return y})

const kkkk=arr.map(x=>x*x).filter(y=> y%2==0)
console.log(kkkk)


//conditional rendering

b1=true, b2=false

console.log(b2 && "Debarun")




function change(){

document.getElementById("t1").style.color="red";

const name= document.getElementById("name").value;
document.getElementById("t1").innerHTML=name;
}