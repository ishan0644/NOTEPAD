const body=document.querySelector("body");
const btnSave=document.querySelector(".save").addEventListener("click",save);
let click=0;

let newText;

//saving item
function save(){
    // click++;
    const key=prompt("Enter the key name");
    const input=document.querySelector("textarea").value;
   
        localStorage.setItem(key,input);
    document.querySelector("textarea").value="";
}

//clearing item
const btnClear=document.querySelector(".clear").addEventListener("click",clear);
function clear(){
    let val=prompt("Enter which todo do you need to Delete!!");
    localStorage.removeItem(val);
    // const chi=document.querySelector(".newText");
    body.removeChild(newText);
}

//getting saved item
const btnGet=document.querySelector(".get").addEventListener("click",get);
function get(){
    let val=prompt("Enter which todo do you need!!");
    if(typeof localStorage.getItem(val)=="object"){  //if key not exist in local storage so it means its type is object
        alert("No item Exist");
        return;
    }
    newText=document.createElement("textarea");
    newText.textContent=localStorage.getItem(val);
    newText.classList.add("newText");
    body.appendChild(newText);
}

