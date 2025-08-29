console.clear();

console.log("Hello World");

const button = document.querySelector("[data-js ='button']");
button.addEventListener("click", () => {
    console.log(button.innerHTML)
    if(button.innerHTML == "Clicked"){
        button.innerHTML = "Unclick"
    }else{
        button.innerHTML = "Clicked"
    }
   
    button.classList.toggle("toggle-class")
})