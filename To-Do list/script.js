const inputArea = document.getElementById("inputBx");
const listSpace = document.getElementById("list");

function addList(){
    if(inputArea.value === ''){
        alert("Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listSpace.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputArea.value = "";
    storeData();
}

listSpace.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData(){
    localStorage.setItem("data", listSpace.innerHTML);
}

function display(){
    listSpace.innerHTML = localStorage.getItem("data");
}

display();