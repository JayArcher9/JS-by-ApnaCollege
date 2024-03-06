let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

function addItem() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
}



btn.addEventListener("click", addItem);

inp.addEventListener("keypress", function(event) {
    // Check if the key pressed is Enter (key code 13)
    if (event.key === "Enter") {
        addItem();
    }
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();

    }
    
});
