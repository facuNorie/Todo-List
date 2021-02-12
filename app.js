// Prevent Default of Input Text
document.querySelector(".form__text").addEventListener("keypress", e =>{
    if(e.keyCode == 13) e.preventDefault();
});

// Calling Button
let btn = document.querySelector(".form__btn");
btn.addEventListener("click",()=>{
    generateItem(document.querySelector(".form__text").value);
    
});
// Generation Item List
const generateItem = (item)=>{
    if(item == "") return ;
    // Create item
    let div = document.createElement("DIV");
    let p = document.createElement("P");
    let button = document.createElement("BUTTON");
    // Add Class
    div.classList.add("list__div");
    p.classList.add("list__item");
    button.classList.add("list__btn");
    // Content of P and Button
    p.textContent = item;
    button.innerHTML = "X";
    // Child
    div.appendChild(p);
    div.appendChild(button);
    document.querySelector(".list").appendChild(div);
    // Clean Input
    document.querySelector(".form__text").value = "";
    // DELETE BTN 
    button.addEventListener("click",()=>{
        if(confirm("Segur@ que quiere remover la nota?")) document.querySelector(".list").removeChild(div);
        else return;
        
        
    });
}