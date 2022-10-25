let form = document.getElementById("form");
let input = document.getElementById("input");
let failuremsg = document.getElementById("failuremsg");
let successmsg = document.getElementById("successmsg");
let posts = document.getElementById("posts");




form.addEventListener("submit",(e)=>{
    e.preventDefault();    
    console.log("Click it's ok");
    formValidation();
  });
 
  let formValidation = ()=>{
    if(input.value === ""){
        failuremsg.innerHTML = "Post cannot be blank"
        console.log("Failure, blank post");
    }
    else{    
        failuremsg.innerHTML = ""
        console.log("success importing");
        acceptData();
    }
}
let data = {};

let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = ()=>{
    posts.innerHTML +=
    `
        <div>
            <p>${data.text}</p>
            <span class="options">
            <img class="edit" src="edit.png" alt="">
            <img class="delete" src="delete.png" alt="">
            </span>
        </div>  
    `    
 
}