let value;

const programmer = {
    name : "Mustafa Murat Coşkun",
    age : 25,
    email: "coskun.m.murat@gmail.com",
    langs : ["Python","Java","Javascript"],

    address : {
        city : "Ankara",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı Çalışıyor...");
    }


}

value = programmer;

value = programmer.email; // Genel olarak
value = programmer["email"];


value = programmer.langs;


value = programmer.address.city;


programmer.work();


const programmers = [
    {name: "Mustafa Murat",age:25},
    {name : "Oğuz",age : 25}
];

value = programmers[0].name;


console.log(value);