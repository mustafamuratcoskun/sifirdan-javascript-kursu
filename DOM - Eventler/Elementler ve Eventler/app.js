const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){

    console.log("Submit Eventi");


    e.preventDefault();

}
// filterInput.addEventListener("focus",function(e){

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);


//     // console.log("Naber");


// });
// filterInput.onfocus = function(){
//     console.log("Naber");

// }
