let person = {

    name : "josh",
    age : 34,
    gender : "male" ,
    addr : {
        state :"andhra",
        city : "hyd",
        country : "india",
    },
    contact : {
        landline : "4154153131",
        office : "215341313",

    },
    anonyfn : function(){
        console.log("Hello Javascript");
    },
    addon : function(x,y){
        return x + y;

    },
    hobbies : ["reading","playing","singing"],

};

console.log(person.hobbies);

console.log(person.hobbies[1]);

delete person.hobbies[2];

console.log(person.hobbies);

// person.anonyfn();

// let temp =  person.addon(10,20);
// console.log(temp);
// console.log(person.addr.country);

// var z = person.addr.country = "USA";

// console.log(z);

// console.log(person.addr);

// // console.log(person.addr.Object.keys())

// person.contact.fax = "31434523";

// console.log(person.contact);

// delete person.addr.city;

// console.log(person.addr);

// person =  undefined;

// console.log(person);